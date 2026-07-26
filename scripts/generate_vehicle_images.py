#!/usr/bin/env python3
"""
Generate professional reference images for all Shoondili catalogue models
using z-ai image generation CLI. Each model gets 2-3 colour variant images.
"""

import os
import subprocess
import json
import time
from pathlib import Path

VEHICLES_DIR = Path('/home/z/my-project/public/vehicles')
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

# Variant colours for each model (2-3 per model for variety)
COLOUR_VARIANTS = {
    # Hatchbacks — popular in white, silver, blue
    'nissan-note-2014': ['white', 'silver'],
    'nissan-note-2016': ['white', 'blue'],
    'nissan-note-2018': ['silver', 'red'],
    'honda-fit-2014-new-shape': ['white', 'silver'],
    'honda-fit-2016-new-shape': ['blue', 'white'],
    'honda-fit-2018-new-shape': ['silver', 'red'],
    'mazda-demio-2014-old-shape': ['white', 'silver'],
    'mazda-demio-2014-new-shape': ['red', 'white'],
    'mazda-demio-2016-old-shape': ['silver', 'blue'],
    'mazda-demio-2016-new-shape': ['white', 'red'],
    # SUVs — popular in black, red, white
    'mazda-cx5-2014': ['black', 'red'],
    'mazda-cx5-2015': ['white', 'silver'],
    'mazda-cx3-2014': ['red', 'white'],
    'mazda-cx3-2016': ['black', 'blue'],
    'volkswagen-tiguan-2014': ['white', 'black'],
    'volkswagen-tiguan-2016': ['silver', 'red'],
    # Sedans — popular in white, blue, silver
    'volkswagen-polo-6-tsi-2014-old-shape': ['white', 'blue'],
    'volkswagen-polo-6-tsi-2016-new-shape': ['silver', 'red'],
    'volkswagen-polo-6-tsi-2018-new-shape': ['white', 'blue'],
    'volkswagen-polo-6-tsi-2020-new-shape': ['red', 'silver'],
    'volkswagen-golf-7-2014': ['white', 'blue'],
    'volkswagen-golf-7-2016': ['silver', 'black'],
    # Premium — Audi in black, silver
    'audi-a6-2015': ['black', 'silver'],
}

# Body type descriptions for better prompts
BODY_TYPES = {
    'Nissan Note': 'compact hatchback',
    'Honda Fit': 'compact hatchback',
    'Mazda CX-5': 'compact SUV crossover',
    'Mazda CX-3': 'compact SUV crossover',
    'Mazda Demio': 'compact hatchback',
    'Volkswagen Polo 6 TSI': 'compact sedan hatchback',
    'Volkswagen Golf 7': 'compact hatchback',
    'Volkswagen Tiguan': 'compact SUV crossover',
    'Audi A6': 'luxury mid-size sedan',
}


def build_prompt(entry, colour):
    """Build a professional image generation prompt for a vehicle model."""
    make = entry['make']
    model = entry['model']
    year = entry['year']
    body_type = BODY_TYPES.get(f"{make} {model}", 'car')
    
    # Shape variant description
    shape = ''
    if entry['shape'] == 'new shape':
        shape = 'latest generation redesigned model'
    elif entry['shape'] == 'old shape':
        shape = 'earlier generation classic model'
    
    prompt = (
        f"Professional automotive studio photograph of a {year} {make} {model} "
        f"{body_type}, {colour} exterior paint, {shape}. "
        f"Clean studio lighting, 3/4 front angle view showing the full vehicle exterior. "
        f"Neutral dark background, no text overlays, no watermarks, photorealistic quality. "
        f"The vehicle should appear as a genuine {make} {model} with correct proportions, "
        f"authentic {make} design language and styling details. High resolution automotive photography."
    )
    return prompt


def generate_image(prompt, output_path, size='1344x768'):
    """Generate an image using z-ai CLI."""
    cmd = [
        'z-ai', 'image',
        '--prompt', prompt,
        '--output', str(output_path),
        '--size', size,
    ]
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=180)
        if result.returncode == 0 and output_path.exists():
            return True
        else:
            print(f"  Generation failed: {result.stderr[:200]}")
            return False
    except subprocess.TimeoutExpired:
        print(f"  Generation timed out")
        return False
    except Exception as e:
        print(f"  Generation error: {e}")
        return False


def main():
    VEHICLES_DIR.mkdir(parents=True, exist_ok=True)
    
    image_map = {}
    provenance = {}
    
    total_models = len(CATALOGUE)
    print(f"Generating reference images for {total_models} models...")
    
    for i, entry in enumerate(CATALOGUE):
        entry_id = entry['id']
        variants = COLOUR_VARIANTS.get(entry_id, ['white', 'silver'])
        local_images = []
        provenance_entries = []
        
        print(f"\n[{i+1}/{total_models}] {entry['make']} {entry['model']} {entry['year']} ({entry['shape']})")
        
        for colour in variants:
            prompt = build_prompt(entry, colour)
            filename = f"{entry_id}-{colour}.png"
            dest_path = VEHICLES_DIR / filename
            
            print(f"  Generating {colour} variant...")
            if generate_image(prompt, dest_path):
                local_images.append(f"/vehicles/{filename}")
                provenance_entries.append({
                    'file': f"/vehicles/{filename}",
                    'method': 'ai-generation',
                    'prompt': prompt,
                    'model': f"{entry['make']} {entry['model']} {entry['year']}",
                    'variant': colour,
                    'note': 'AI-generated reference image for illustration purposes. Not an actual vehicle photo.',
                    'timestamp': time.strftime('%Y-%m-%dT%H:%M:%SZ'),
                })
                print(f"  ✓ Generated: {filename}")
            else:
                print(f"  ✗ Failed: {colour}")
            
            # Brief pause between generations
            time.sleep(2)
        
        image_map[entry_id] = local_images
        provenance[entry_id] = provenance_entries
        print(f"  Images for {entry_id}: {len(local_images)}")
    
    # Save provenance
    prov_file = VEHICLES_DIR / 'provenance.json'
    with open(prov_file, 'w') as f:
        json.dump(provenance, f, indent=2)
    print(f"\nProvenance saved to {prov_file}")
    
    # Save image map
    map_file = SCRIPTS_DIR / 'image_map.json'
    with open(map_file, 'w') as f:
        json.dump(image_map, f, indent=2)
    print(f"Image map saved to {map_file}")
    
    total = sum(len(v) for v in image_map.values())
    print(f"\nDone! Generated {total} reference images for {len(image_map)} models.")
    
    return image_map


if __name__ == '__main__':
    image_map = main()
