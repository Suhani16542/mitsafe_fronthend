import os
import pypdf

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

def search_pdf(file_path):
    try:
        reader = pypdf.PdfReader(file_path)
        full_text = ""
        for i, page in enumerate(reader.pages):
            text = page.extract_text()
            if text:
                full_text += f"\n--- Page {i+1} ---\n" + text
        
        found_any = False
        for term in SEARCH_TERMS:
            if term.lower() in full_text.lower():
                print(f"Found '{term}' in PDF: {file_path}")
                found_any = True
        
        if found_any:
            # Let's save the extracted text to a text file next to the pdf for easy inspection
            txt_path = file_path + ".txt"
            with open(txt_path, 'w', encoding='utf-8') as f:
                f.write(full_text)
            print(f"Saved full text of {os.path.basename(file_path)} to {txt_path}")
    except Exception as e:
        print(f"Error reading {file_path}: {e}")

def main():
    desktop = "c:\\Users\\HP\\Desktop"
    for file in os.listdir(desktop):
        if file.lower().endswith(".pdf"):
            search_pdf(os.path.join(desktop, file))

if __name__ == "__main__":
    main()
