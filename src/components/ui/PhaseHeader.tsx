import { PHASE_INFO } from '../../types/game';
import type { Phase } from '../../types/game';

interface PhaseHeaderProps {
  phase: Phase;
  questionIndex: number;
  totalQuestions: number;
}

export default function PhaseHeader({ phase, questionIndex, totalQuestions }: PhaseHeaderProps) {
  const info = PHASE_INFO[phase];
  return (
    <div className="flex items-center justify-between mb-6">
      {/* Phase badge */}
      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${info.bgColor} ${info.borderColor}`}>
        <span className="text-xl">{info.icon}</span>
        <span className={`text-sm font-semibold ${info.color}`}>{info.label}</span>
      </div>
      {/* Question counter */}
      <div className="flex items-center gap-1.5">
        {Array.from({ length: totalQuestions }, (_, i) => (
          <div
            key={i}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i < questionIndex
                ? 'bg-green-500 w-5'
                : i === questionIndex
                ? 'bg-yellow-400 w-5 animate-pulse'
                : 'bg-slate-600 w-2.5'
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-slate-400 font-medium">
          {questionIndex + 1}/{totalQuestions}
        </span>
      </div>
    </div>
  );
}
