'use client';

import { useState } from 'react';
import { PHONE, EMAIL, WHATSAPP_URL } from '@/lib/constants';
import { CATALOGUE_MAKES } from '@/lib/constants';

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
    phone: '',
    email: '',
    make: '',
    model: '',
    yearRange: '',
    budget: '',
    transmission: '',
    fuel: '',
    colour: '',
    message: '',
  });

  const typeLabels: Record<string, string> = {
    general: 'Sourcing Enquiry',
    inventory: 'Model Enquiry',
    import: 'Import Enquiry',
    finance: 'Payment Options Enquiry',
    sell: 'Vehicle Sale Enquiry',
  };

  const typeMessages: Record<string, string> = {
    general: 'Hi Shoondili, I\'d like to enquire about sourcing a vehicle from Japan.',
    inventory: `Hi Shoondili, I'm interested in sourcing a specific model.`,
    import: 'Hi Shoondili, I\'d like to start an import enquiry for a vehicle from Japan.',
    finance: 'Hi Shoondili, I\'d like to ask about payment options.',
    sell: 'Hi Shoondili, I\'d like to sell my vehicle. Can you help?',
  };

  const buildWhatsAppMessage = () => {
    let msg = typeMessages[type];
    if (vehicleInfo) msg = `Hi Shoondili, I'm interested in sourcing ${vehicleInfo}.`;
    if (formData.name) msg += ` My name is ${formData.name}.`;
    if (formData.phone) msg += ` My WhatsApp number is ${formData.phone}.`;
    if (formData.email) msg += ` Email: ${formData.email}.`;
    if (formData.make) msg += ` I'm looking for: ${formData.make} ${formData.model || ''}.`;
    if (formData.yearRange) msg += ` Year range: ${formData.yearRange}.`;
    if (formData.budget) msg += ` Maximum budget: ${formData.budget}.`;
    if (formData.transmission) msg += ` Transmission preference: ${formData.transmission}.`;
    if (formData.fuel) msg += ` Fuel preference: ${formData.fuel}.`;
    if (formData.colour) msg += ` Colour preference: ${formData.colour}.`;
    if (formData.message) msg += ` Additional notes: ${formData.message}`;
    return encodeURIComponent(msg);
  };

  const whatsappHref = `${WHATSAPP_URL}?text=${buildWhatsAppMessage()}`;

  const inputStyle = {
    backgroundColor: 'var(--surface-raised)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-color)',
    borderRadius: '9999px',
  };

  const labelStyle = {
    color: 'var(--text-secondary)',
    fontSize: '0.7rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
  };

  return (
    <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border-color)' }}>
      <h3 className="font-serif-editorial tracking-editorial text-xl mb-2" style={{ color: 'var(--text-primary)' }}>
        {typeLabels[type]}
      </h3>

      {/* Sourcing disclaimer */}
      <p className="text-xs mb-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
        This is a vehicle sourcing request, not a vehicle reservation or purchase agreement. Shoondili will provide a written quotation before you commit.
      </p>

      {/* WhatsApp-first: primary CTA at top */}
      <div className="mb-6">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold w-full px-6 py-4 text-sm font-mono inline-flex items-center justify-center gap-3"
        >
          <WhatsAppIcon />
          Send enquiry via WhatsApp
        </a>
        <p className="text-xs mt-2 text-center" style={{ color: 'var(--text-secondary)' }}>
          We respond fastest on WhatsApp. Tap to start a chat.
        </p>
      </div>

      {/* Optional form to compose message before sending */}
      <div className="h-px w-full mb-6" style={{ backgroundColor: 'var(--border-color)' }} />

      <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text-secondary)' }}>
        Compose your message first
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="wa-name" className="block mb-2" style={labelStyle}>Your Name</label>
          <input id="wa-name" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 text-sm" style={inputStyle} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="wa-phone" className="block mb-2" style={labelStyle}>Phone or WhatsApp Number</label>
          <input id="wa-phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 text-sm" style={inputStyle} placeholder="Your WhatsApp or phone number" />
        </div>
        <div>
          <label htmlFor="wa-email" className="block mb-2" style={labelStyle}>Email (optional)</label>
          <input id="wa-email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 text-sm" style={inputStyle} placeholder="Your email address" />
        </div>

        {(type === 'import' || type === 'inventory' || type === 'general') && (
          <div>
            <label htmlFor="wa-make" className="block mb-2" style={labelStyle}>Preferred Make</label>
            <select id="wa-make" value={formData.make} onChange={(e) => setFormData({ ...formData, make: e.target.value })} className="w-full px-4 py-3 text-sm" style={inputStyle}>
              <option value="">Any make</option>
              {CATALOGUE_MAKES.map((make) => (<option key={make} value={make}>{make}</option>))}
            </select>
          </div>
        )}
        {(type === 'import' || type === 'inventory' || type === 'general') && (
          <div>
            <label htmlFor="wa-model" className="block mb-2" style={labelStyle}>Preferred Model</label>
            <input id="wa-model" type="text" value={formData.model} onChange={(e) => setFormData({ ...formData, model: e.target.value })} className="w-full px-4 py-3 text-sm" style={inputStyle} placeholder="e.g. Note, Fit, Demio, Polo..." />
          </div>
        )}
        {(type === 'import' || type === 'inventory' || type === 'general') && (
          <div>
            <label htmlFor="wa-year" className="block mb-2" style={labelStyle}>Preferred Year Range</label>
            <input id="wa-year" type="text" value={formData.yearRange} onChange={(e) => setFormData({ ...formData, yearRange: e.target.value })} className="w-full px-4 py-3 text-sm" style={inputStyle} placeholder="e.g. 2014–2018" />
          </div>
        )}
        <div>
          <label htmlFor="wa-budget" className="block mb-2" style={labelStyle}>Maximum Budget (NAD)</label>
          <input id="wa-budget" type="text" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full px-4 py-3 text-sm" style={inputStyle} placeholder="e.g. N$150,000" />
        </div>
        {(type === 'import' || type === 'inventory') && (
          <>
            <div>
              <label htmlFor="wa-transmission" className="block mb-2" style={labelStyle}>Transmission Preference (optional)</label>
              <select id="wa-transmission" value={formData.transmission} onChange={(e) => setFormData({ ...formData, transmission: e.target.value })} className="w-full px-4 py-3 text-sm" style={inputStyle}>
                <option value="">No preference</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
            <div>
              <label htmlFor="wa-fuel" className="block mb-2" style={labelStyle}>Fuel Preference (optional)</label>
              <select id="wa-fuel" value={formData.fuel} onChange={(e) => setFormData({ ...formData, fuel: e.target.value })} className="w-full px-4 py-3 text-sm" style={inputStyle}>
                <option value="">No preference</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div>
              <label htmlFor="wa-colour" className="block mb-2" style={labelStyle}>Colour Preference (optional)</label>
              <input id="wa-colour" type="text" value={formData.colour} onChange={(e) => setFormData({ ...formData, colour: e.target.value })} className="w-full px-4 py-3 text-sm" style={inputStyle} placeholder="e.g. White, Silver, Black..." />
            </div>
          </>
        )}
        <div>
          <label htmlFor="wa-message" className="block mb-2" style={labelStyle}>Additional Details</label>
          <textarea id="wa-message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 text-sm" style={{ ...inputStyle, borderRadius: '16px' }} placeholder="Any extra information you want to share..." />
        </div>
      </div>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-flat w-full px-6 py-3 text-sm font-medium text-center inline-flex items-center justify-center gap-2"
      >
        <WhatsAppIcon />
        Send composed message on WhatsApp
      </a>

      <div className="mt-6 pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
        <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>
          Prefer email or phone?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
          <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-brand-gold" style={{ color: 'var(--text-secondary)' }}>{EMAIL}</a>
          <span style={{ color: 'var(--border-color)' }}>|</span>
          <a href={`tel:+264812486557`} className="transition-colors hover:text-brand-gold" style={{ color: 'var(--text-secondary)' }}>{PHONE}</a>
        </div>
      </div>
    </div>
  );
}
