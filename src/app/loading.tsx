export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 rounded-full animate-spin mx-auto mb-4" style={{ borderColor: 'rgba(255,255,255,0.12)', borderTopColor: '#F5B400' }} />
        <p className="text-sm font-mono" style={{ color: '#9B9B96' }}>Loading...</p>
      </div>
    </div>
  );
}
