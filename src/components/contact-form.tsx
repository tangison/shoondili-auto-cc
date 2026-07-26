'use client';

import { useState } from 'react';
import { PHONE, EMAIL, WHATSAPP_URL } from '@/lib/constants';
import { WhatsAppCTA } from '@/components/whatsapp-cta';

interface ContactFormProps {
  type?: 'general' | 'inventory' | 'import' | 'finance' | 'sell';
  vehicleId?: string;
  vehicleInfo?: string;
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.46.125-.609.132-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export function ContactForm({ type = 'general', vehicleId, vehicleInfo }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    vehicle: '',
    budget: '',
    message: '',
  });

  const typeLabels: Record<string, string> = {
    general: 'General Enquiry',
    inventory: 'Vehicle Enquiry',
    import: 'Import Enquiry',
    finance: 'Finance Enquiry',
    sell: 'Sell Your Vehicle',
  };

  const typeMessages: Record<string, string> = {
    general: 'Hi Shoondili, I have a general enquiry.',
    inventory: `Hi Shoondili, I'm interested in a vehicle in your inventory.`,
    import: 'Hi Shoondili, I\'d like to start an import enquiry for a vehicle from Japan.',
    finance: 'Hi Shoondili, I\'d like to discuss finance options for a vehicle.',
    sell: 'Hi Shoondili, I\'d like to sell my vehicle. Can you help?',
  };

  // Build WhatsApp message from form data
  const buildWhatsAppMessage = () => {
    let msg = typeMessages[type];
    if (vehicleInfo) msg = `Hi Shoondili, I'm interested in ${vehicleInfo}.`;
    if (formData.name) msg += ` My name is ${formData.name}.`;
    if (formData.vehicle) msg += ` I'm looking for: ${formData.vehicle}.`;
    if (formData.budget) msg += ` My budget is around ${formData.budget}.`;
    if (formData.message) msg += ` ${formData.message}`;
    return encodeURIComponent(msg);
  };

  const whatsappHref = `${WHATSAPP_URL}?text=${buildWhatsAppMessage()}`;

  return (
    <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
      <h3 className="font-serif-editorial tracking-editorial text-xl mb-2" style={{ color: '#F7F7F4' }}>
        {typeLabels[type]}
      </h3>

      {/* WhatsApp-first: primary CTA at top */}
      <div className="mb-6">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full px-6 py-4 text-sm font-mono inline-flex items-center justify-center gap-3 transition-all duration-200 hover:scale-[0.98]"
          style={{
            backgroundColor: '#F5B400',
            color: '#090909',
            borderRadius: '4px',
          }}
        >
          <WhatsAppIcon />
          Send enquiry via WhatsApp
        </a>
        <p className="text-xs mt-2 text-center" style={{ color: '#9B9B96' }}>
          We respond fastest on WhatsApp. Tap to start a chat.
        </p>
      </div>

      {/* Optional form to compose message before sending */}
      <div className="h-px w-full mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }} />

      <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#9B9B96' }}>
        Compose your message first
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="wa-name" className="text-xs uppercase tracking-widest block mb-2" style={{ color: '#9B9B96' }}>
            Your Name
          </label>
          <input
            id="wa-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 rounded text-sm"
            style={{ backgroundColor: '#181818', color: '#F7F7F4', border: '1px solid rgba(255,255,255,0.12)' }}
            placeholder="Your name"
          />
        </div>

        {(type === 'import' || type === 'inventory' || type === 'general') && (
          <div>
            <label htmlFor="wa-vehicle" className="text-xs uppercase tracking-widest block mb-2" style={{ color: '#9B9B96' }}>
              Vehicle you want
            </label>
            <input
              id="wa-vehicle"
              type="text"
              value={formData.vehicle}
              onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
              className="w-full px-3 py-2 rounded text-sm"
              style={{ backgroundColor: '#181818', color: '#F7F7F4', border: '1px solid rgba(255,255,255,0.12)' }}
              placeholder="e.g. Toyota Hilux 2020, Nissan Patrol..."
            />
          </div>
        )}

        {(type === 'finance' || type === 'inventory') && (
          <div>
            <label htmlFor="wa-budget" className="text-xs uppercase tracking-widest block mb-2" style={{ color: '#9B9B96' }}>
              Budget range
            </label>
            <input
              id="wa-budget"
              type="text"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full px-3 py-2 rounded text-sm"
              style={{ backgroundColor: '#181818', color: '#F7F7F4', border: '1px solid rgba(255,255,255,0.12)' }}
              placeholder="e.g. NAD 200,000 – 350,000"
            />
          </div>
        )}

        <div>
          <label htmlFor="wa-message" className="text-xs uppercase tracking-widest block mb-2" style={{ color: '#9B9B96' }}>
            Additional details
          </label>
          <textarea
            id="wa-message"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3 py-2 rounded text-sm"
            style={{ backgroundColor: '#181818', color: '#F7F7F4', border: '1px solid rgba(255,255,255,0.12)' }}
            placeholder="Any extra info you want to share..."
          />
        </div>
      </div>

      {/* Composed WhatsApp send button — updates as form changes */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-flat w-full px-6 py-3 text-sm font-medium text-center inline-flex items-center justify-center gap-2"
      >
        <WhatsAppIcon />
        Send composed message on WhatsApp
      </a>

      {/* Secondary contact options */}
      <div className="mt-6 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        <p className="text-xs mb-2" style={{ color: '#9B9B96' }}>
          Prefer email or phone?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 text-xs font-mono" style={{ color: '#9B9B96' }}>
          <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-brand-gold" style={{ color: '#9B9B96' }}>
            {EMAIL}
          </a>
          <span style={{ color: 'rgba(255,255,255,0.12)' }}>|</span>
          <a href={`tel:+264812486557`} className="transition-colors hover:text-brand-gold" style={{ color: '#9B9B96' }}>
            {PHONE}
          </a>
        </div>
      </div>
    </div>
  );
}
