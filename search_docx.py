import zipfile
import xml.etree.ElementTree as ET
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

def search_docx(file_path):
    try:
        with zipfile.ZipFile(file_path) as z:
            xml_content = z.read('word/document.xml')
            root = ET.fromstring(xml_content)
            # Find all text elements
            texts = []
            for elem in root.iter():
                if elem.tag.endswith('t'):
                    if elem.text:
                        texts.append(elem.text)
            full_text = " ".join(texts)
            for term in SEARCH_TERMS:
                if term.lower() in full_text.lower():
                    print(f"Found '{term}' in DOCX: {file_path}")
    except Exception as e:
        print(f"Error reading {file_path}: {e}")

def main():
    desktop = "c:\\Users\\HP\\Desktop"
    for file in os.listdir(desktop):
        if file.endswith(".docx"):
            search_docx(os.path.join(desktop, file))

if __name__ == "__main__":
    main()
