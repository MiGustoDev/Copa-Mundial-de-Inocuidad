import { useCallback } from 'react';
import type { LeaderboardEntry, Phase } from '../types/game';
import { phaseRank } from '../types/game';

const STORAGE_KEY = 'copa_mundial_leaderboard';
const MAX_ENTRIES = 10;

export function useLeaderboard() {
  const getAll = useCallback((): LeaderboardEntry[] => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as LeaderboardEntry[]) : [];
    } catch {
      return [];
    }
  }, []);

  const save = useCallback(
    (entry: Omit<LeaderboardEntry, 'id' | 'date'>) => {
      const all = getAll();
      const newEntry: LeaderboardEntry = {
        ...entry,
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        date: new Date().toLocaleDateString('es-AR'),
      };
      const updated = [...all, newEntry]
        .sort((a, b) => {
          // Sort by: phase reached (desc), then total time (asc)
          const rankDiff = phaseRank(b.phase) - phaseRank(a.phase);
          if (rankDiff !== 0) return rankDiff;
          const timeA = a.totalTimeMs + a.penaltyMs;
          const timeB = b.totalTimeMs + b.penaltyMs;
          return timeA - timeB;
        })
        .slice(0, MAX_ENTRIES);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return newEntry;
    },
    [getAll]
  );

  const clear = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const getSurvivors = useCallback((): LeaderboardEntry[] => {
    return getAll().filter((e) => !e.eliminated);
  }, [getAll]);

  const formatTime = useCallback((ms: number) => {
    const totalSec = Math.floor(ms / 1000);
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }, []);

  const getPhaseLabel = useCallback((phase: Phase): string => {
    const labels: Record<Phase, string> = {
      grupos: 'Fase de Grupos',
      octavos: 'Octavos de Final',
      cuartos: 'Cuartos de Final',
      semifinal: 'Semifinal',
      final: 'Gran Final 🏆',
    };
    return labels[phase];
  }, []);

  return { getAll, save, clear, getSurvivors, formatTime, getPhaseLabel };
}
