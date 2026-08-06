import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'de-AT',
  title: 'Omega Dokumentation',
  description: 'Dokumentation für Omega Module und Erweiterungen',

  // Bei GitHub Pages ohne eigene Domain:
  // base: '/NAME-DES-REPOSITORIES/',
  //
  // Bei docs.omegasol.at:
  base: '/',

  head: [
    ['meta', { name: 'theme-color', content: '#086890' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    siteTitle: false,

    logo: {
      src: '/Logo.jpg',
      alt: 'Omega Solutions Software GmbH'
    },

    nav: [
      { text: 'Startseite', link: '/' },
      {
        text: 'Module',
        items: [
          { text: 'Lohn & Gehalt', link: '/lohn/' },
          { text: 'Weitere Module', link: '/module/' }
        ]
      },
      { text: 'Support', link: 'https://www.omegasol.at/kundensupport/' }
    ],

    sidebar: {
      '/lohn/': [
        {
          text: 'Lohn & Gehalt',
          collapsed: false,
          items: [
            { text: 'Übersicht', link: '/lohn/' },
            { text: 'Installation', link: '/lohn/installation' },
            { text: 'Einrichtung', link: '/lohn/einrichtung' },
            { text: 'Erste Schritte', link: '/lohn/erste-schritte' },
            { text: 'Fehlerbehebung', link: '/lohn/fehlerbehebung' }
          ]
        }
      ],

      '/module/': [
        {
          text: 'Omega Module',
          collapsed: false,
          items: [
            { text: 'Übersicht', link: '/module/' }
          ]
        }
      ]
    },

    outline: {
      level: [2, 3],
      label: 'Auf dieser Seite'
    },

    docFooter: {
      prev: 'Vorherige Seite',
      next: 'Nächste Seite'
    },

    lastUpdated: {
      text: 'Zuletzt aktualisiert'
    },

    returnToTopLabel: 'Nach oben',
    sidebarMenuLabel: 'Menü',
    darkModeSwitchLabel: 'Darstellung',
    lightModeSwitchTitle: 'Zum hellen Modus wechseln',
    darkModeSwitchTitle: 'Zum dunklen Modus wechseln',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Dokumentation durchsuchen',
            buttonAriaLabel: 'Dokumentation durchsuchen'
          },
          modal: {
            noResultsText: 'Keine Ergebnisse gefunden',
            resetButtonTitle: 'Suche zurücksetzen',
            footer: {
              selectText: 'Auswählen',
              navigateText: 'Navigieren',
              closeText: 'Schließen'
            }
          }
        }
      }
    },

    footer: {
      message: 'Omega Solutions Software GmbH – Microsoft Dynamics 365 Business Central Lösungen',
      copyright: `© ${new Date().getFullYear()} Omega Solutions Software GmbH`
    }
  }
})
