'use client';

import { useState } from 'react';
import { PHONE, EMAIL } from '@/lib/constants';

interface ContactFormProps {
  type?: 'general' | 'inventory' | 'import' | 'finance' | 'sell';
  vehicleId?: string;
}

export function ContactForm({ type = 'general', vehicleId }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type,
          vehicleId,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit enquiry');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact us directly.');
    }
  };

  const typeLabels: Record<string, string> = {
    general: 'General Enquiry',
    inventory: 'Vehicle Enquiry',
    import: 'Import Enquiry',
    finance: 'Finance Enquiry',
    sell: 'Sell Your Vehicle',
  };

  if (status === 'success') {
    return (
      <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
        <svg className="w-8 h-8 mb-4" style={{ color: '#F5B400' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-serif-editorial tracking-editorial text-xl mb-2" style={{ color: '#F7F7F4' }}>
          Enquiry submitted
        </h3>
        <p className="text-sm mb-4" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
          We received your {typeLabels[type]}. We will get back to you as soon as possible.
        </p>
        <button
          className="btn-flat px-4 py-2 text-sm"
          onClick={() => setStatus('idle')}
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
      <h3 className="font-serif-editorial tracking-editorial text-xl mb-2" style={{ color: '#F7F7F4' }}>
        {typeLabels[type]}
      </h3>
      <p className="text-sm mb-6" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
        Fill out the form below and we will respond to your enquiry. Or contact us directly at{' '}
        <span className="font-mono">{PHONE}</span> or{' '}
        <span className="font-mono">{EMAIL}</span>.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="contact-name" className="text-xs uppercase tracking-widest block mb-2" style={{ color: '#9B9B96' }}>
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 rounded text-sm"
            style={{ backgroundColor: '#181818', color: '#F7F7F4', border: '1px solid rgba(255,255,255,0.12)' }}
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="text-xs uppercase tracking-widest block mb-2" style={{ color: '#9B9B96' }}>
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2 rounded text-sm"
            style={{ backgroundColor: '#181818', color: '#F7F7F4', border: '1px solid rgba(255,255,255,0.12)' }}
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="text-xs uppercase tracking-widest block mb-2" style={{ color: '#9B9B96' }}>
            Phone (optional)
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3 py-2 rounded text-sm"
            style={{ backgroundColor: '#181818', color: '#F7F7F4', border: '1px solid rgba(255,255,255,0.12)' }}
            placeholder="081 xxx xxxx"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="text-xs uppercase tracking-widest block mb-2" style={{ color: '#9B9B96' }}>
            Message
          </label>
          <textarea
            id="contact-message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3 py-2 rounded text-sm"
            style={{ backgroundColor: '#181818', color: '#F7F7F4', border: '1px solid rgba(255,255,255,0.12)' }}
            placeholder="Tell us what you need..."
          />
        </div>

        {status === 'error' && (
          <div className="p-3 rounded text-sm" style={{ backgroundColor: 'rgba(220,38,38,0.15)', color: '#DC2626' }}>
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-flat px-6 py-3 text-sm font-medium w-full"
          style={{ backgroundColor: '#F5B400', color: '#090909', borderColor: '#F5B400' }}
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
        </button>
      </form>
    </div>
  );
}
