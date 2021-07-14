import { ReportHandler } from 'web-vitals'

const initWebVitals = (reporter?: ReportHandler): void => {
  if (typeof reporter === 'function') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reporter)
      getFID(reporter)
      getFCP(reporter)
      getLCP(reporter)
      getTTFB(reporter)
    })
  }
}

export default initWebVitals
