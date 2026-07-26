'use client';

import Link from 'next/link';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <p className="text-6xl font-mono mb-4" style={{ color: '#9B9B96' }}>500</p>
        <h1 className="font-serif-editorial tracking-editorial-tight text-2xl mb-4" style={{ color: '#F7F7F4' }}>
          Something went wrong
        </h1>
        <p className="text-sm mb-8" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
          An unexpected error occurred. This is not your fault. Please try again or contact us directly.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            className="btn-flat px-6 py-3 text-sm font-medium"
            onClick={reset}
          >
            Try again
          </button>
          <Link
            href="/"
            className="btn-flat px-6 py-3 text-sm font-medium inline-flex items-center"
            style={{ backgroundColor: '#F5B400', color: '#090909', borderColor: '#F5B400' }}
          >
            Go to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
