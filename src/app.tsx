import 'react-app-polyfill/stable'
import './libs/locales/i18n'
import './base.scss'

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './core/Home'
import { Header } from './comp/Header'

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
