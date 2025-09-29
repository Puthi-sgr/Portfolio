import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import userAvatar from './assets/user1.jpg'

const applyFavicon = () => {
  const existing =
    document.querySelector<HTMLLinkElement>('link#dynamic-favicon') ??
    document.querySelector<HTMLLinkElement>("link[rel*='icon']");

  const link = existing ?? document.createElement('link')
  link.rel = 'icon'
  link.type = 'image/jpeg'
  link.href = userAvatar

  if (!existing) {
    link.id = 'dynamic-favicon'
    document.head.appendChild(link)
  }
}

applyFavicon()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
