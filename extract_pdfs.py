import pypdf
import os
import sys

# Set standard output encoding to utf-8 just in case
try:
    sys.stdout.reconfigure(encoding='utf-8')
except AttributeError:
    pass

def extract(pdf_name):
    path = os.path.join("c:\\Users\\HP\\Desktop", pdf_name)
    out_path = path + ".txt"
    try:
        reader = pypdf.PdfReader(path)
        text = ""
        for page in reader.pages:
            t = page.extract_text()
            if t:
                text += t + "\n"
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(text)
        safe_name = pdf_name.encode('ascii', errors='ignore').decode('ascii')
        print(f"Extracted {safe_name} to {out_path} ({len(text)} chars)")
    except Exception as e:
        print(f"Error: {e}")

extract("PROJECT DOCUMENT.pdf")
extract("📘 PROJECT DOC.pdf".replace("📘 ", "")) # Wait, let's see if we can find files by prefix/suffix
for file in os.listdir("c:\\Users\\HP\\Desktop"):
    if file.lower().endswith(".pdf"):
        extract(file)
