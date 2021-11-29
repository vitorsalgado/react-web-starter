import 'react-app-polyfill/stable'
import './utils/locales/i18n'
import './base.scss'
import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@app/features/Home'
import Header from '@app/components/Header'

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
