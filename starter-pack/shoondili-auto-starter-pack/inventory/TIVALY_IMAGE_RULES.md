# Tivaly Vehicle Image Rules

Tivaly is the search API used to discover and scrape real vehicle images from approved manufacturer or dealer sources.

## Required workflow

1. Search by exact make, model, variant, year or shape, and colour.
2. Prefer official manufacturer media pages and established dealer listings.
3. Retain the original source URL and source name.
4. Download the real image into the project instead of hotlinking where terms permit.
5. Validate that the image actually matches the vehicle record.
6. Preserve aspect ratio and avoid removing watermarks or attribution.
7. Generate optimized local WebP or AVIF delivery variants.
8. Record source, retrieval date, dimensions, and vehicle association.

## Prohibited

- AI-generated cars
- Fake colour variants
- Mismatched model years
- Reusing one model image for another vehicle
- Removing copyright marks
- Inventing source attribution
- Presenting a manufacturer marketing image as the exact physical unit without clear wording

Keep the API key server-side in an environment variable. Never include it in source code or Git history.
