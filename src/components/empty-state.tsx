import Link from 'next/link';

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

export function EmptyState({ title, description, actionLabel, actionHref }: EmptyStateProps) {
  return (
    <div className="py-24 text-center">
      <div className="max-w-md mx-auto">
        <svg className="w-12 h-12 mx-auto mb-6" style={{ color: '#9B9B96' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 002 2H6a2 2 0 002-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 009.586 13H7" />
        </svg>
        <h2 className="font-serif-editorial tracking-editorial text-2xl mb-4" style={{ color: '#F7F7F4' }}>
          {title}
        </h2>
        <p className="text-sm mb-8" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
          {description}
        </p>
        {actionLabel && actionHref && (
          <Link
            href={actionHref}
            className="btn-flat px-6 py-3 text-sm font-medium inline-flex items-center"
            style={{ backgroundColor: '#F5B400', color: '#090909', borderColor: '#F5B400' }}
          >
            {actionLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
