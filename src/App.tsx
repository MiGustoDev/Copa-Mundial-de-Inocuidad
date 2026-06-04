import { GameProvider, useGameStore } from './store/useGameStore';
import StartScreen from './components/screens/StartScreen';
import QuestionScreen from './components/screens/QuestionScreen';
import FeedbackScreen from './components/screens/FeedbackScreen';
import PhaseTransitionScreen from './components/screens/PhaseTransitionScreen';
import ResultsScreen from './components/screens/ResultsScreen';
import LeaderboardScreen from './components/screens/LeaderboardScreen';
import PergaminoScreen from './components/screens/PergaminoScreen';

function GameRouter() {
  const { state } = useGameStore();

  // Simple key-based remount for clean screen transitions
  // No AnimatePresence needed — each screen handles its own entrance animations
  const screenKey = state.screen;

  const renderScreen = () => {
    switch (state.screen) {
      case 'start':       return <StartScreen />;
      case 'question':    return <QuestionScreen key={`q-${state.phase}-${state.questionIndex}`} />;
      case 'feedback':    return <FeedbackScreen />;
      case 'transition':  return <PhaseTransitionScreen />;
      case 'results':     return <ResultsScreen />;
      case 'leaderboard': return <LeaderboardScreen />;
      case 'pergamino':   return <PergaminoScreen />;
      default:            return <StartScreen />;
    }
  };

  return (
    <div key={screenKey} className="min-h-screen" style={{ animation: 'fadeIn 0.25s ease-out' }}>
      {renderScreen()}
    </div>
  );
}

export default function App() {
  return (
    <GameProvider>
      <GameRouter />
    </GameProvider>
  );
}
