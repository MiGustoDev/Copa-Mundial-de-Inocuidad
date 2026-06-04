import { motion } from 'framer-motion';

interface SoccerBallProps {
  size?: number;
  className?: string;
  speed?: number;
}

export default function SoccerBall({ size = 80, className = '', speed = 8 }: SoccerBallProps) {
  return (
    <motion.div
      className={`select-none pointer-events-none ${className}`}
      style={{ fontSize: size, lineHeight: 1, display: 'inline-block' }}
      animate={{ rotate: 360 }}
      transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
    >
      ⚽
    </motion.div>
  );
}
