import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>ToDo-App Backend</span>,
  search: {
    placeholder: '🔍'
  },
  i18n: [
    { locale: 'en', text: '🇬🇧' },
    { locale: 'de', text: 'Deutsch' },
  ],
  faviconGlyph: '📝',
  project: {
    link: 'https://github.com/FujiwaraChoki/m295-project',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/FujiwaraChoki/m295-project',
  footer: {
    text: 'MIT 2023 © Sami Hindi.',
  },
}

export default config
