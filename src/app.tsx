import 'react-app-polyfill/stable'
import './shared/locales/i18n'
import './base.scss'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@app/core/Home'
import Header from '@app/shared/components/Header'

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
