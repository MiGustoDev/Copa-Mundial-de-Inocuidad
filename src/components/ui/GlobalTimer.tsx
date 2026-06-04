import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface GlobalTimerProps {
  formatted: string;
  hasBonus?: boolean;
}

export default function GlobalTimer({ formatted, hasBonus }: GlobalTimerProps) {
  return (
    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-mono font-bold
      ${hasBonus ? 'bg-orange-900/60 text-orange-300 border border-orange-500/50' : 'bg-slate-800 text-slate-300 border border-slate-600'}`}>
      <Clock size={14} className={hasBonus ? 'text-orange-400' : 'text-slate-400'} />
      <span>{formatted}</span>
      {hasBonus && <span className="text-orange-400 text-xs">+⏱</span>}
    </div>
  );
}

interface TimerBadgeProps {
  ms: number;
  label?: string;
}

export function TimerBadge({ ms, label = 'Tiempo' }: TimerBadgeProps) {
  const totalSec = Math.floor(ms / 1000);
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  const formatted = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="inline-flex items-center gap-1.5 bg-slate-700 border border-slate-500 rounded-full px-3 py-1 text-sm"
    >
      <Clock size={13} className="text-slate-400" />
      <span className="text-slate-300">{label}:</span>
      <span className="font-mono font-bold text-white">{formatted}</span>
    </motion.div>
  );
}
