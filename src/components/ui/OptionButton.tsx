import { motion } from 'framer-motion';

interface OptionButtonProps {
  text: string;
  index: number;
  selected: boolean;
  disabled: boolean;
  onSelect: (index: number) => void;
}

export default function OptionButton({ text, index, selected, disabled, onSelect }: OptionButtonProps) {
  const match = text.match(/^([A-Z]\))\s*(.*)$/);
  const label = match ? match[1] : '';
  const rest = match ? match[2] : text;

  return (
    <motion.button
      onClick={() => !disabled && onSelect(index)}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={`
        w-full text-left px-4 py-2.5 rounded-xl border-2 transition-all duration-200
        text-sm sm:text-base min-h-[52px] leading-snug
        focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400
        ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}
        ${selected
          ? 'border-yellow-400 bg-yellow-400/10 text-yellow-300 shadow-[0_0_16px_rgba(251,191,36,0.25)] animate-glow-pulse'
          : 'border-slate-600 bg-slate-800/60 text-slate-200 hover:border-slate-400 hover:bg-slate-700/60'
        }
      `}
      aria-label={`Opción ${String.fromCharCode(65 + index)}: ${text}`}
      aria-pressed={selected}
    >
      {label ? (
        <>
          <span className={selected ? 'font-semibold text-yellow-300' : 'font-semibold text-slate-200'}>{label} </span>
          <span className="font-normal text-current">{rest}</span>
        </>
      ) : (
        text
      )}
    </motion.button>
  );
}
