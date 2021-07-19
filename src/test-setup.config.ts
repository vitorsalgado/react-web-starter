import '@testing-library/jest-dom/extend-expect'
import 'react-app-polyfill/stable'

import './utils/locales/i18n'

import { HelmetProvider } from 'react-helmet-async'

HelmetProvider.canUseDOM = false
