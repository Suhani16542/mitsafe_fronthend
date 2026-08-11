import os
import re
import sys

def replace_blues(directory):
    # Regex to find Tailwind's blue classes e.g., blue-50, blue-500, blue-900
    tailwind_blue_pattern = re.compile(r'blue-(?:50|[1-9]00)')
    
    # List of specific hex codes to replace (case-insensitive)
    hex_blues = [
        r'#2563FF', r'#2563EB', r'#0052FF', r'#38BDF8', 
        r'#1D4ED8', r'#2A67FF', r'#00BFFF', r'#0042D9',
        r'#0052ff', r'#2563eb', r'#2563ff', r'#38bdf8',
        r'#1d4ed8', r'#2a67ff', r'#00bfff', r'#0042d9'
    ]
    hex_pattern = re.compile(r'(?i)(' + '|'.join(hex_blues) + r')')

    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.ts', '.tsx', '.css')):
                filepath = os.path.join(root, file)
                
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()

                new_content = tailwind_blue_pattern.sub('[#305EFF]', content)
                new_content = hex_pattern.sub('#305EFF', new_content)

                if content != new_content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {filepath}")

if __name__ == '__main__':
    replace_blues(sys.argv[1])
