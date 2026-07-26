export function SectionDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full" style={{ backgroundColor: 'var(--border-color)' }} />
      </div>
    </div>
  );
}
