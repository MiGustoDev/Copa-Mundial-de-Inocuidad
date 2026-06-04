import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// StrictMode removed: it double-invokes renders in dev and breaks
// framer-motion AnimatePresence, causing blank screens on screen transitions.
createRoot(document.getElementById('root')!).render(
  <App />
)
