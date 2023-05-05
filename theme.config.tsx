import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <img src="https://avatars.githubusercontent.com/u/78088687?v=4" style={{
    width: '10%',
    height: '10%',
    borderRadius: '50%',
    objectFit: 'cover',
  }} />,
  search: {
    placeholder: '🔍'
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'de', text: 'Deutsch' },
  ],
  faviconGlyph: '📝',
  project: {
    link: 'https://github.com/FujiwaraChoki/m295-projekt-docs',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/FujiwaraChoki/m295-projekt-docs/blob/main',
  footer: {
    text: 'MIT 2023 © Sami Hindi.',
  },
}

export default config;
