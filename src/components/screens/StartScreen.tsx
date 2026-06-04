import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Trophy, Users, Shield } from 'lucide-react';
import { useGameStore } from '../../store/useGameStore';
import { DEFAULT_SETTINGS } from '../../store/useGameStore';
import SoccerBall from '../ui/SoccerBall';
import type { GameSettings } from '../../types/game';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function StartScreen() {
  const { dispatch } = useGameStore();
  const [name, setName] = useState('');
  const [settings, setSettings] = useState<GameSettings>(DEFAULT_SETTINGS);

  const handleStart = () => {
    if (!name.trim()) return;
    dispatch({ type: 'START_GAME', payload: { name, settings } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-8"
      style={{ background: 'linear-gradient(160deg, #0f172a 0%, #1a2744 50%, #0f2016 100%)' }}>

      {/* Decorative pitch lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 border-[40px] border-white rounded-[100px]" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-white" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-lg flex flex-col items-center gap-6"
      >
        {/* Ball */}
        <motion.div variants={itemVariants} className="mb-2">
          <SoccerBall size={72} />
        </motion.div>

        {/* Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            La Copa Mundial
          </h1>
          <h1 className="text-3xl sm:text-4xl font-black leading-tight"
            style={{ background: 'linear-gradient(90deg, #fbbf24, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            de la Inocuidad
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
            Cada colaborador juega para el mismo equipo: producir alimentos seguros
          </p>
        </motion.div>

        {/* Gold quote */}
        <motion.div variants={itemVariants}
          className="flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-xl px-4 py-3 text-center">
          <Trophy size={18} className="text-yellow-400 flex-shrink-0" />
          <p className="text-yellow-300 text-sm font-semibold italic">
            "La Copa más importante se juega todos los días"
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 w-full">
          {[
            { icon: '🏟️', label: '5 Fases', sub: 'Eliminatorias' },
            { icon: '❓', label: '12 Preguntas', sub: 'De Inocuidad' },
            { icon: '🏆', label: 'Gran Final', sub: 'Argumental' },
          ].map((s) => (
            <div key={s.label} className="bg-slate-800/60 border border-slate-700 rounded-xl p-3 text-center">
              <div className="text-2xl">{s.icon}</div>
              <div className="text-white font-bold text-xs mt-1">{s.label}</div>
              <div className="text-slate-400 text-xs">{s.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Form card */}
        <motion.div variants={itemVariants}
          className="w-full bg-slate-800/70 backdrop-blur border border-slate-700 rounded-2xl p-6 flex flex-col gap-4">

          {/* Name input */}
          <div>
            <label htmlFor="player-name" className="block text-slate-300 text-sm font-semibold mb-2">
              <Users size={14} className="inline mr-1.5 text-yellow-400" />
              Tu nombre (para el ranking)
            </label>
            <input
              id="player-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleStart()}
              placeholder="Ej: María González"
              maxLength={40}
              aria-label="Nombre del jugador"
              className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500
                focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all text-base"
            />
          </div>

          {/* Second chance toggle */}
          <div className="flex items-center justify-between bg-slate-900/60 rounded-xl px-4 py-3 border border-slate-700">
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-yellow-400" />
              <div>
                <p className="text-white text-sm font-semibold">Segunda Oportunidad</p>
                <p className="text-slate-400 text-xs">+30s penalización al tiempo</p>
              </div>
            </div>
            <button
              role="switch"
              aria-checked={settings.secondChanceEnabled}
              aria-label="Activar segunda oportunidad"
              onClick={() => setSettings(s => ({ ...s, secondChanceEnabled: !s.secondChanceEnabled }))}
              className={`relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400
                ${settings.secondChanceEnabled ? 'bg-yellow-400' : 'bg-slate-600'}`}
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-all duration-300
                ${settings.secondChanceEnabled ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>

          {/* Start button */}
          <motion.button
            onClick={handleStart}
            disabled={!name.trim()}
            whileHover={name.trim() ? { scale: 1.02 } : {}}
            whileTap={name.trim() ? { scale: 0.97 } : {}}
            aria-label="Comenzar partido"
            className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-black text-lg transition-all duration-300
              focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400
              ${name.trim()
                ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-900/50 hover:shadow-green-900/80 cursor-pointer'
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
              }`}
          >
            <Play size={22} fill="currentColor" />
            Comenzar Partido
          </motion.button>
        </motion.div>

        <motion.p variants={itemVariants} className="text-slate-500 text-xs text-center">
          Día Mundial de la Inocuidad Alimentaria · 7 de Junio
        </motion.p>
      </motion.div>
    </div>
  );
}
