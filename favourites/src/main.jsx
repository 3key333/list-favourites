import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { FavouritesProvider } from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <FavouritesProvider>
    <App />
  </FavouritesProvider> 
)