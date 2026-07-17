import sys
import os
from PIL import Image

def remove_background(img_path, output_path, tolerance=25, target_color=(255, 255, 255)):
    """
    Performs BFS flood fill from borders to turn background white/off-white pixels transparent,
    leaving internal white pixels intact, and then crops the image to its non-transparent bounds.
    """
    if not os.path.exists(img_path):
        print(f"Error: File {img_path} does not exist.")
        return False
        
    print(f"Processing background for {img_path} with tolerance {tolerance}...")
    img = Image.open(img_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()
    
    # Sample corner to adjust target color if close to white
    corner_pixel = pixels[min(5, width-1), min(5, height-1)]
    r_c, g_c, b_c, a_c = corner_pixel
    # If corner is very bright/white-ish, use it as the target color
    if r_c > 220 and g_c > 220 and b_c > 220:
        target_color = (r_c, g_c, b_c)
        print(f"Sampled corner color: {target_color}")

    visited = [[False for _ in range(height)] for _ in range(width)]
    queue = []
    
    # Seed queue from border pixels
    for x in range(width):
        for y in [0, height - 1]:
            r, g, b, a = pixels[x, y]
            if all(abs(c - t) <= tolerance for c, t in zip((r, g, b), target_color)):
                queue.append((x, y))
                visited[x][y] = True
                
    for y in range(height):
        for x in [0, width - 1]:
            if not visited[x][y]:
                r, g, b, a = pixels[x, y]
                if all(abs(c - t) <= tolerance for c, t in zip((r, g, b), target_color)):
                    queue.append((x, y))
                    visited[x][y] = True
                    
    # BFS traversal
    dx = [0, 0, 1, -1, 1, -1, 1, -1]
    dy = [1, -1, 0, 0, 1, 1, -1, -1]
    
    count = 0
    while queue:
        cx, cy = queue.pop(0)
        r, g, b, a = pixels[cx, cy]
        pixels[cx, cy] = (r, g, b, 0) # Make transparent
        count += 1
        
        for i in range(8):
            nx, ny = cx + dx[i], cy + dy[i]
            if 0 <= nx < width and 0 <= ny < height:
                if not visited[nx][ny]:
                    nr, ng, nb, na = pixels[nx, ny]
                    # Check if pixel is close to target_color
                    if all(abs(c - t) <= tolerance for c, t in zip((nr, ng, nb), target_color)):
                        queue.append((nx, ny))
                        visited[nx][ny] = True
                        
    print(f"Made {count} background pixels transparent.")
    
    # Trim transparency
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        print(f"Cropped image to bounding box: {bbox}")
        
    img.save(output_path, "PNG")
    print(f"Successfully saved processed image to {output_path}\n")
    return True

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python remove_bg.py <input_image_path> <output_image_path> [tolerance]")
        sys.exit(1)
        
    input_path = sys.argv[1]
    output_path = sys.argv[2]
    tol = int(sys.argv[3]) if len(sys.argv) > 3 else 25
    
    remove_background(input_path, output_path, tolerance=tol)
