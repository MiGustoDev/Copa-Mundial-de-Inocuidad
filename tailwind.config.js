/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#0f172a',
          900: '#1e293b',
          800: '#1e3a8a',
        },
        pitch: {
          500: '#16a34a',
          400: '#22c55e',
        },
        gold: {
          400: '#fbbf24',
          300: '#fde68a',
        },
        cream: '#fef3c7',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'confetti-fall': 'confettiFall 3s ease-in forwards',
        'shake': 'shake 0.5s ease-in-out',
        'pulse-gold': 'pulseGold 1.5s ease-in-out infinite',
      },
      keyframes: {
        confettiFall: {
          '0%': { transform: 'translateY(-20px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '0' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-10px)' },
          '40%': { transform: 'translateX(10px)' },
          '60%': { transform: 'translateX(-10px)' },
          '80%': { transform: 'translateX(10px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(251, 191, 36, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(251, 191, 36, 0)' },
        },
      },
    },
  },
  plugins: [],
}
