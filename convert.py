import os
try:
    from PIL import Image
    print("PIL is available")
    
    jpg_path = "/Users/soham/Developer/projects/portfolio-website/public/soham-portrait.jpg"
    webp_path = "/Users/soham/Developer/projects/portfolio-website/public/soham-portrait.webp"
    
    if os.path.exists(jpg_path):
        img = Image.open(jpg_path)
        img.save(webp_path, "WEBP", quality=80)
        print(f"Successfully converted to WebP: {webp_path}")
        print(f"Original size: {os.path.getsize(jpg_path)} bytes")
        print(f"WebP size: {os.path.getsize(webp_path)} bytes")
    else:
        print(f"Error: {jpg_path} not found")
except ImportError:
    print("PIL (Pillow) is NOT installed. Trying alternative shell methods if any.")
