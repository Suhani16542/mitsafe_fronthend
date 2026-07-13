import os

SEARCH_TERMS = [
    "Consultancy",
    "Cloud Computing",
    "High-end IT solutions",
    "Fresh Ideas For Every Business",
    "Save Time & Effort",
    "Auro Terra Energy",
    "More Matrimony",
    "Anyuni",
    "Zupee",
    "Metrofintech",
    "The Raichand"
]

EXCLUDE_DIRS = {"node_modules", ".git", ".next", "dist", "build"}
EXCLUDE_EXTS = {".png", ".jpg", ".jpeg", ".webp", ".pdf", ".zip", ".exe", ".dll", ".pdb", ".ico"}

def search_desktop():
    desktop_path = "c:\\Users\\HP\\Desktop"
    matches = []
    for root, dirs, files in os.walk(desktop_path):
        # modify dirs in-place to prune excluded directories
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in EXCLUDE_EXTS:
                continue
            
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    for term in SEARCH_TERMS:
                        if term in content:
                            matches.append((term, file_path))
            except Exception as e:
                pass
                
    for term, path in matches:
        print(f"Found '{term}' in: {path}")

if __name__ == "__main__":
    search_desktop()
