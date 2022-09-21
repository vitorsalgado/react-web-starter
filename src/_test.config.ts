import '@testing-library/jest-dom/extend-expect'
import 'react-app-polyfill/stable'
import './libs/i18n'

import { HelmetProvider } from 'react-helmet-async'

HelmetProvider.canUseDOM = false
