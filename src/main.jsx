import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import store (all state)
import { store } from './app/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap the app in your provider and link it tot he store */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
