import { motion } from 'framer-motion';
import { PHASE_INFO } from '../../types/game';
import type { Phase } from '../../types/game';

interface PhaseHeaderProps {
  phase: Phase;
  questionIndex: number;
  totalQuestions: number;
}

export default function PhaseHeader({ phase, questionIndex, totalQuestions }: PhaseHeaderProps) {
  const info = PHASE_INFO[phase];
  const progress = Math.min(100, ((questionIndex + 1) / totalQuestions) * 100);

  return (
    <div className="flex items-center gap-4 mb-6 w-full flex-nowrap">
      <div className={`flex items-center gap-2 flex-shrink-0 px-3 py-1.5 rounded-full border ${info.bgColor} ${info.borderColor}`}>
        <span className="text-xl">{info.icon}</span>
        <span className={`text-sm font-semibold ${info.color}`}>{info.label}</span>
      </div>

      <div className="relative flex-1 min-w-0">
        <div className="h-3 rounded-full bg-slate-800 overflow-hidden border border-slate-700">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-lime-400 to-amber-400 shadow-[0_0_20px_rgba(132,204,22,0.16)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          />
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center justify-end pr-1 text-[11px] font-semibold text-slate-200/90">
          {questionIndex + 1}/{totalQuestions}
        </div>
      </div>
    </div>
  );
}
