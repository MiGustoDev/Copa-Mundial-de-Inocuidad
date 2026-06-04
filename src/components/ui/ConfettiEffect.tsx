import { useMemo } from 'react';

interface ConfettiEffectProps {
  count?: number;
}

const COLORS = ['#fbbf24', '#22c55e', '#3b82f6', '#ef4444', '#a855f7', '#f97316', '#06b6d4', '#ec4899'];

export default function ConfettiEffect({ count = 60 }: ConfettiEffectProps) {
  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: Math.random() * 10 + 6,
      duration: `${2 + Math.random() * 2}s`,
      delay: `${Math.random() * 1.5}s`,
      rotation: Math.random() * 360,
      isCircle: Math.random() > 0.5,
    }))
  , [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {particles.map((p) => (
        <div
          key={p.id}
          className="confetti-particle absolute"
          style={{
            left: p.left,
            top: 0,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.isCircle ? '50%' : '2px',
            transform: `rotate(${p.rotation}deg)`,
            '--duration': p.duration,
            '--delay': p.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
