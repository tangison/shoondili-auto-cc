'use client';

import { WHATSAPP_URL } from '@/lib/constants';

function WhatsAppIcon({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dim = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5';
  return (
    <svg viewBox="0 0 24 24" className={dim} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.46.125-.609.132-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

interface WhatsAppCTAProps {
  message?: string;
  label?: string;
  variant?: 'primary' | 'secondary' | 'inline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  vehicleInfo?: string;
}

export function WhatsAppCTA({
  message = 'Hi Shoondili, I\'d like to enquire about a vehicle.',
  label = 'Chat on WhatsApp',
  variant = 'primary',
  size = 'md',
  className = '',
  vehicleInfo,
}: WhatsAppCTAProps) {
  const finalMessage = vehicleInfo
    ? `Hi Shoondili, I'm interested in ${vehicleInfo}. Could you provide more details?`
    : message;

  const href = `${WHATSAPP_URL}?text=${encodeURIComponent(finalMessage)}`;

  const sizeStyles = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-4 py-3 text-sm',
    lg: 'px-6 py-4 text-sm',
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#F5B400',
      color: '#090909',
      border: 'none',
    },
    secondary: {
      backgroundColor: '#111111',
      color: '#F7F7F4',
      border: '1px solid rgba(255,255,255,0.12)',
    },
    inline: {
      backgroundColor: 'transparent',
      color: '#F5B400',
      border: 'none',
    },
  };

  const iconSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 font-mono transition-all duration-200 hover:scale-[0.98] rounded ${sizeStyles[size]} ${className}`}
      style={variantStyles[variant]}
    >
      <WhatsAppIcon size={iconSize} />
      {label}
    </a>
  );
}
