import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <p className="text-6xl font-mono mb-4" style={{ color: '#F5B400' }}>404</p>
        <h1 className="font-serif-editorial tracking-editorial-tight text-2xl mb-4" style={{ color: '#F7F7F4' }}>
          Page not found
        </h1>
        <p className="text-sm mb-8" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
          The page you are looking for does not exist. It may have been moved or the URL may be incorrect.
        </p>
        <Link
          href="/"
          className="btn-flat px-6 py-3 text-sm font-medium inline-flex items-center"
          style={{ backgroundColor: '#F5B400', color: '#090909', borderColor: '#F5B400' }}
        >
          Go to homepage
        </Link>
      </div>
    </div>
  );
}
