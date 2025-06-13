// Global Language Map
export const langMap: Record<string, string[]> = {
  'en': ['en-US'],
  'zh-hk': ['zh-HK'],
}

// Waline Language Map
// https://waline.js.org/en/guide/features/i18n.html
export const walineLocaleMap: Record<string, string> = {
  'en': 'en-US',
  'zh-hk': 'zh-HK',
}

// Giscus Language Map
// https://giscus.app/
export const giscusLocaleMap: Record<string, string> = {
  'en': 'en',
  'zh-hk': 'zh-HK',
}

// Supported Languages
export const supportedLangs = Object.keys(langMap).flat()
