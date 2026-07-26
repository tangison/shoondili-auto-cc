import Link from 'next/link';

interface ErrorStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
}

export function ErrorState({ title = 'Something went wrong', description = 'An unexpected error occurred. Please try again.', actionLabel = 'Go Home', actionHref = '/' }: ErrorStateProps) {
  return (
    <div className="py-24 text-center">
      <div className="max-w-md mx-auto">
        <svg className="w-12 h-12 mx-auto mb-6" style={{ color: '#9B9B96' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <h2 className="font-serif-editorial tracking-editorial text-2xl mb-4" style={{ color: '#F7F7F4' }}>
          {title}
        </h2>
        <p className="text-sm mb-8" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
          {description}
        </p>
        <Link
          href={actionHref}
          className="btn-flat px-6 py-3 text-sm font-medium inline-flex items-center"
          style={{ backgroundColor: '#F5B400', color: '#090909', borderColor: '#F5B400' }}
        >
          {actionLabel}
        </Link>
      </div>
    </div>
  );
}
