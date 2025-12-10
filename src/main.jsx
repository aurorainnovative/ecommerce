import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import MainLayout from './components/layout/MainLayout'
import CartContextProvider from './context/CartContextProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextProvider>
      <MainLayout />
    </CartContextProvider>
  </StrictMode>
)


