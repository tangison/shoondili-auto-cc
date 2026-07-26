export function StatusBadge({ status }: { status: string }) {
  const statusColors: Record<string, { bg: string; text: string }> = {
    Available: { bg: 'rgba(245,180,0,0.15)', text: '#F5B400' },
    Reserved: { bg: 'rgba(255,165,0,0.15)', text: '#FFA500' },
    Sold: { bg: 'rgba(156,163,175,0.15)', text: '#9CA3AF' },
    Unavailable: { bg: 'rgba(220,38,38,0.15)', text: '#DC2626' },
  };

  const style = statusColors[status] || statusColors.Available;

  return (
    <span className="tag-pill inline-block" style={{ backgroundColor: style.bg, color: style.text }}>
      {status}
    </span>
  );
}
