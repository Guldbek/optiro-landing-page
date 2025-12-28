export default function manifest() {
  return {
    name: 'Optiro - Projektstyring & Ressourceplanlægning',
    short_name: 'Optiro',
    description: 'Styr på projekter, timer og ressourcer for projektbaserede virksomheder',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3c735b',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
    lang: 'da',
    dir: 'ltr',
  };
}
