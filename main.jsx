import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './src/providers/UserContext.jsx'
import { TechsProvider } from './src/providers/TechContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TechsProvider>
          <App />
        </TechsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
