export function LoadingState({ message = 'Loading...' }: { message?: string }) {
  return (
    <div className="py-24 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-8 h-8 border-2 rounded-full animate-spin mx-auto mb-6" style={{ borderColor: 'rgba(255,255,255,0.12)', borderTopColor: '#F5B400' }} />
        <p className="text-sm font-mono" style={{ color: '#9B9B96' }}>{message}</p>
      </div>
    </div>
  );
}
