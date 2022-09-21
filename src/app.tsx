import 'react-app-polyfill/stable'
import './libs/i18n'
import './base.scss'

import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home } from './core/Home'
import { Header } from './comp/Header'

export function App(): JSX.Element {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}
