#!/usr/bin/env python3
"""
Source vehicle images via Tavily API for all Shoondili catalogue models.
Searches for each model in variant colours, downloads images, and generates
a provenance JSON + inventory-data update script.
"""

import os
import sys
import json
import time
import hashlib
import requests
from pathlib import Path
from urllib.parse import quote

TAVILY_API_KEY = os.environ.get('TAVILY_API_KEY', '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')
VEHICLES_DIR = Path('/home/z/my-project/public/vehicles')
PROVENANCE_FILE = Path('/home/z/my-project/public/vehicles/provenance.json')
SCRIPTS_DIR = Path('/home/z/my-project/scripts')

# All catalogue models (including new Audi A6)
CATALOGUE = [
    {'id': 'nissan-note-2014', 'make': 'Nissan', 'model': 'Note', 'year': 2014, 'shape': 'unspecified', 'priceNad': 68000},
    {'id': 'nissan-note-2016', 'make': 'Nissan', 'model': 'Note', 'year': 2016, 'shape': 'unspecified', 'priceNad': 68000},
    {'id': 'nissan-note-2018', 'make': 'Nissan', 'model': 'Note', 'year': 2018, 'shape': 'unspecified', 'priceNad': 68000},
    {'id': 'honda-fit-2014-new-shape', 'make': 'Honda', 'model': 'Fit', 'year': 2014, 'shape': 'new shape', 'priceNad': 85000},
    {'id': 'honda-fit-2016-new-shape', 'make': 'Honda', 'model': 'Fit', 'year': 2016, 'shape': 'new shape', 'priceNad': 85000},
    {'id': 'honda-fit-2018-new-shape', 'make': 'Honda', 'model': 'Fit', 'year': 2018, 'shape': 'new shape', 'priceNad': 85000},
    {'id': 'mazda-cx5-2014', 'make': 'Mazda', 'model': 'CX-5', 'year': 2014, 'shape': 'unspecified', 'priceNad': 145000},
    {'id': 'mazda-cx3-2014', 'make': 'Mazda', 'model': 'CX-3', 'year': 2014, 'shape': 'unspecified', 'priceNad': 145000},
    {'id': 'mazda-cx3-2016', 'make': 'Mazda', 'model': 'CX-3', 'year': 2016, 'shape': 'unspecified', 'priceNad': 145000},
    {'id': 'mazda-cx5-2015', 'make': 'Mazda', 'model': 'CX-5', 'year': 2015, 'shape': 'unspecified', 'priceNad': 145000},
    {'id': 'mazda-demio-2014-old-shape', 'make': 'Mazda', 'model': 'Demio', 'year': 2014, 'shape': 'old shape', 'priceNad': 70000},
    {'id': 'mazda-demio-2014-new-shape', 'make': 'Mazda', 'model': 'Demio', 'year': 2014, 'shape': 'new shape', 'priceNad': 70000},
    {'id': 'mazda-demio-2016-old-shape', 'make': 'Mazda', 'model': 'Demio', 'year': 2016, 'shape': 'old shape', 'priceNad': 70000},
    {'id': 'mazda-demio-2016-new-shape', 'make': 'Mazda', 'model': 'Demio', 'year': 2016, 'shape': 'new shape', 'priceNad': 70000},
    {'id': 'volkswagen-polo-6-tsi-2014-old-shape', 'make': 'Volkswagen', 'model': 'Polo 6 TSI', 'year': 2014, 'shape': 'old shape', 'priceNad': 120000},
    {'id': 'volkswagen-polo-6-tsi-2016-new-shape', 'make': 'Volkswagen', 'model': 'Polo 6 TSI', 'year': 2016, 'shape': 'new shape', 'priceNad': 120000},
    {'id': 'volkswagen-polo-6-tsi-2018-new-shape', 'make': 'Volkswagen', 'model': 'Polo 6 TSI', 'year': 2018, 'shape': 'new shape', 'priceNad': 120000},
    {'id': 'volkswagen-polo-6-tsi-2020-new-shape', 'make': 'Volkswagen', 'model': 'Polo 6 TSI', 'year': 2020, 'shape': 'new shape', 'priceNad': 120000},
    {'id': 'volkswagen-golf-7-2014', 'make': 'Volkswagen', 'model': 'Golf 7', 'year': 2014, 'shape': 'unspecified', 'priceNad': 125000},
    {'id': 'volkswagen-golf-7-2016', 'make': 'Volkswagen', 'model': 'Golf 7', 'year': 2016, 'shape': 'unspecified', 'priceNad': 125000},
    {'id': 'volkswagen-tiguan-2014', 'make': 'Volkswagen', 'model': 'Tiguan', 'year': 2014, 'shape': 'unspecified', 'priceNad': 150000},
    {'id': 'volkswagen-tiguan-2016', 'make': 'Volkswagen', 'model': 'Tiguan', 'year': 2016, 'shape': 'unspecified', 'priceNad': 150000},
    # NEW: Audi A6
    {'id': 'audi-a6-2015', 'make': 'Audi', 'model': 'A6', 'year': 2015, 'shape': 'unspecified', 'priceNad': 155000},
]

# Variant colours to search for (up to 3 colours per model for variety)
COLOUR_QUERIES = {
    'default': '',  # General search — no colour specified
    'white': 'white',
    'black': 'black',
    'silver': 'silver',
    'red': 'red',
    'blue': 'blue',
    'grey': 'grey',
}

# Map each model to which colour variants to source (max 3 per model)
VARIANT_MAP = {}
for entry in CATALOGUE:
    make_model = f"{entry['make']} {entry['model']}"
    # Pick up to 3 popular colours per model for variety
    if make_model in ['Nissan Note', 'Honda Fit', 'Mazda Demio']:
        VARIANT_MAP[entry['id']] = ['default', 'white', 'silver']
    elif make_model in ['Mazda CX-5', 'Mazda CX-3', 'Volkswagen Tiguan']:
        VARIANT_MAP[entry['id']] = ['default', 'black', 'red']
    elif make_model in ['Volkswagen Polo 6 TSI', 'Volkswagen Golf 7']:
        VARIANT_MAP[entry['id']] = ['default', 'white', 'blue']
    elif make_model == 'Audi A6':
        VARIANT_MAP[entry['id']] = ['default', 'black', 'silver']
    else:
        VARIANT_MAP[entry['id']] = ['default', 'white', 'black']


def tavily_search(query, include_images=True):
    """Search Tavily API and return results with images."""
    url = "https://api.tavily.com/search"
    payload = {
        "api_key": TAVILY_API_KEY,
        "query": query,
        "include_images": include_images,
        "include_image_descriptions": True,
        "search_depth": "basic",
        "max_results": 5,
    }
    try:
        resp = requests.post(url, json=payload, timeout=30)
        resp.raise_for_status()
        data = resp.json()
        return data
    except Exception as e:
        print(f"  Tavily search error: {e}")
        return None


def download_image(url, dest_path, timeout=15):
    """Download an image from URL to local path."""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Accept': 'image/*',
        }
        resp = requests.get(url, headers=headers, timeout=timeout, stream=True)
        resp.raise_for_status()
        content_type = resp.headers.get('content-type', '')
        if not content_type.startswith('image/'):
            print(f"  Skipping non-image: {content_type}")
            return False
        # Write to file
        with open(dest_path, 'wb') as f:
            for chunk in resp.iter_content(8192):
                f.write(chunk)
        # Check file size — skip if too small (< 5KB, likely placeholder/icon)
        if os.path.getsize(dest_path) < 5000:
            print(f"  Skipping tiny image ({os.path.getsize(dest_path)} bytes)")
            os.remove(dest_path)
            return False
        return True
    except Exception as e:
        print(f"  Download error for {url}: {e}")
        return False


def build_search_query(entry, colour_variant):
    """Build a search query for a specific vehicle model and colour."""
    year = entry['year']
    make = entry['make']
    model = entry['model']
    shape_info = f"({entry['shape']})" if entry['shape'] != 'unspecified' else ''
    colour = COLOUR_QUERIES.get(colour_variant, '')
    colour_suffix = f" {colour}" if colour else ""
    return f"{make} {model} {year}{shape_info}{colour_suffix} car exterior photo"


def source_all_images():
    """Main function: search and download images for all catalogue models."""
    VEHICLES_DIR.mkdir(parents=True, exist_ok=True)
    
    provenance = {}
    image_map = {}  # id -> list of local image paths
    
    total_searches = sum(len(VARIANT_MAP[e['id']]) for e in CATALOGUE)
    print(f"Sourcing images for {len(CATALOGUE)} models, {total_searches} searches total...")
    
    for entry in CATALOGUE:
        entry_id = entry['id']
        variants = VARIANT_MAP[entry_id]
        local_images = []
        provenance_entries = []
        
        print(f"\n=== {entry['make']} {entry['model']} {entry['year']} ({entry['shape']}) ===")
        
        for variant in variants:
            query = build_search_query(entry, variant)
            print(f"  Searching: {query}")
            
            result = tavily_search(query)
            if not result:
                continue
            
            images = result.get('images', [])
            if not images:
                print(f"  No images found for variant '{variant}'")
                continue
            
            # Try to download up to 2 images per variant
            downloaded = 0
            for img_url in images[:5]:  # Try up to 5 URLs
                if downloaded >= 2:
                    break
                
                # Skip known bad URLs
                if any(skip in img_url.lower() for skip in ['favicon', 'logo', 'icon', 'emoji', 'svg', 'gif']):
                    continue
                
                # Create filename
                colour_tag = variant if variant != 'default' else 'exterior'
                ext = 'jpg'  # Default extension
                if '.png' in img_url.lower():
                    ext = 'png'
                elif '.webp' in img_url.lower():
                    ext = 'webp'
                filename = f"{entry_id}-{colour_tag}-{downloaded + 1}.{ext}"
                dest = VEHICLES_DIR / filename
                
                if download_image(img_url, dest):
                    local_images.append(f"/vehicles/{filename}")
                    provenance_entries.append({
                        'file': f"/vehicles/{filename}",
                        'source_url': img_url,
                        'query': query,
                        'variant': variant,
                        'timestamp': time.strftime('%Y-%m-%dT%H:%M:%SZ'),
                    })
                    downloaded += 1
                    print(f"  Downloaded: {filename}")
                else:
                    print(f"  Failed to download from: {img_url[:80]}...")
            
            # Rate limit — don't hammer the API
            time.sleep(1.5)
        
        image_map[entry_id] = local_images
        provenance[entry_id] = provenance_entries
        print(f"  Total images for {entry_id}: {len(local_images)}")
    
    # Save provenance
    with open(PROVENANCE_FILE, 'w') as f:
        json.dump(provenance, f, indent=2)
    print(f"\nProvenance saved to {PROVENANCE_FILE}")
    
    # Save image map for updating inventory-data.ts
    map_file = SCRIPTS_DIR / 'image_map.json'
    with open(map_file, 'w') as f:
        json.dump(image_map, f, indent=2)
    print(f"Image map saved to {map_file}")
    
    return image_map, provenance


if __name__ == '__main__':
    image_map, provenance = source_all_images()
    total = sum(len(v) for v in image_map.values())
    print(f"\nDone! Sourced {total} images for {len(image_map)} models.")
