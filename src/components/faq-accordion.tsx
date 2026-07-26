'use client';

import { useState } from 'react';
import { faqData, faqCategories, FAQItem } from '@/lib/faq-data';

export function FAQAccordion({ categoryFilter }: { categoryFilter?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState(categoryFilter || 'All');

  const filteredFAQ = activeCategory === 'All'
    ? faqData
    : faqData.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Category tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto custom-scrollbar pb-2">
        <button
          className="tag-pill shrink-0 transition-colors"
          style={{
            backgroundColor: activeCategory === 'All' ? 'rgba(245,180,0,0.15)' : '#181818',
            color: activeCategory === 'All' ? '#F5B400' : '#9B9B96',
            border: '1px solid rgba(255,255,255,0.12)',
          }}
          onClick={() => setActiveCategory('All')}
        >
          All
        </button>
        {faqCategories.map((cat) => (
          <button
            key={cat}
            className="tag-pill shrink-0 transition-colors"
            style={{
              backgroundColor: activeCategory === cat ? 'rgba(245,180,0,0.15)' : '#181818',
              color: activeCategory === cat ? '#F5B400' : '#9B9B96',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ items */}
      <div className="space-y-2">
        {filteredFAQ.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={`${item.category}-${index}`}
              className="rounded-lg"
              style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <button
                id={`faq-button-${index}`}
                className="w-full p-4 text-left flex items-center justify-between focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5B400] focus-visible:outline-offset-2"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
              >
                <span className="text-sm" style={{ color: '#F7F7F4' }}>{item.question}</span>
                <svg
                  className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  style={{ color: '#9B9B96' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className="px-4 pb-4"
                >
                  <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
