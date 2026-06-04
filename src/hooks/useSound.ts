import { useCallback, useRef } from 'react';

export function useSound() {
  const ctxRef = useRef<AudioContext | null>(null);

  const getCtx = useCallback((): AudioContext => {
    if (!ctxRef.current) {
      ctxRef.current = new AudioContext();
    }
    return ctxRef.current;
  }, []);

  const playTone = useCallback(
    (frequency: number, duration: number, type: OscillatorType = 'sine', gain = 0.3) => {
      try {
        const ctx = getCtx();
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        osc.type = type;
        osc.frequency.setValueAtTime(frequency, ctx.currentTime);
        gainNode.gain.setValueAtTime(gain, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + duration);
      } catch {
        // Silently ignore if AudioContext fails
      }
    },
    [getCtx]
  );

  const playCorrect = useCallback(() => {
    playTone(523, 0.15, 'sine'); // C5
    setTimeout(() => playTone(659, 0.15, 'sine'), 100); // E5
    setTimeout(() => playTone(784, 0.3, 'sine'), 200);  // G5
  }, [playTone]);

  const playWrong = useCallback(() => {
    playTone(330, 0.15, 'sawtooth', 0.2); // E4
    setTimeout(() => playTone(261, 0.4, 'sawtooth', 0.2), 120); // C4
  }, [playTone]);

  const playPhaseAdvance = useCallback(() => {
    const notes = [523, 659, 784, 1046]; // C E G C (fanfare)
    notes.forEach((freq, i) => {
      setTimeout(() => playTone(freq, 0.25, 'sine', 0.35), i * 140);
    });
  }, [playTone]);

  const playVictory = useCallback(() => {
    const notes = [523, 659, 784, 659, 784, 1046];
    notes.forEach((freq, i) => {
      setTimeout(() => playTone(freq, 0.3, 'sine', 0.35), i * 160);
    });
  }, [playTone]);

  return { playCorrect, playWrong, playPhaseAdvance, playVictory };
}
