import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'

import App from './App'
import { setupStore } from './redux/store'

const container = document.getElementById('root')

const root = createRoot(container as HTMLElement) // createRoot(container!) if you use TypeScript

const store = setupStore()

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
)
