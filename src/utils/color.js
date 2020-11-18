import { COLOR_FAMILIES } from '../constants'

export function getColors(len, theme = 'main') {
  let colors = COLOR_FAMILIES[theme]
  let results = []

  if (colors && len > 0) {
    if (len > 11) {
      results = colors
    } else {
      for (let i = 0; i < len; i++) {
        results.push(colors[Math.floor((i * 11) / len)])
      }
    }
  }

  return results
}
