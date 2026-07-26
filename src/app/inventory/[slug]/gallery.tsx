'use client';

import { useState } from 'react';

interface GalleryProps {
  images: string[];
  make: string;
  model: string;
  year: number;
}

export default function ModelDetailGallery({ images, make, model, year }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="rounded-2xl overflow-hidden bg-surface" style={{ border: '1px solid var(--border-color)' }}>
        <div className="h-64 flex items-center justify-center flex-col gap-3">
          <svg className="w-16 h-16" style={{ color: 'var(--text-secondary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M8 8h.01M12 12h.01" />
          </svg>
          <p className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>Reference images to be added</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="rounded-2xl overflow-hidden bg-surface" style={{ border: '1px solid var(--border-color)' }}>
        <img
          src={images[activeIndex]}
          alt={`${make} ${model} ${year} — reference image, variant ${activeIndex + 1}`}
          className="w-full h-auto object-cover"
          style={{ maxHeight: '420px' }}
        />
        <div className="px-4 py-3" style={{ backgroundColor: 'var(--surface)' }}>
          <p className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
            Images show the model or generation for reference. The exact vehicle, colour, equipment and condition will be confirmed during sourcing.
          </p>
        </div>
      </div>

      {/* Thumbnail strip — variant colour selector */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setActiveIndex(idx)}
              className="rounded-xl overflow-hidden transition-all duration-300"
              style={{
                border: idx === activeIndex ? '2px solid var(--brand-gold)' : '1px solid var(--border-color)',
                opacity: idx === activeIndex ? 1 : 0.7,
                flex: '1 1 0%',
                maxWidth: '120px',
              }}
              aria-label={`View variant ${idx + 1}`}
            >
              <img
                src={img}
                alt={`${make} ${model} variant ${idx + 1}`}
                className="w-full h-auto object-cover"
                style={{ maxHeight: '80px' }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
