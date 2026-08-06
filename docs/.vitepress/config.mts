import { defineConfig } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx'


export default defineConfig({
  lang: 'de-AT',
  title: 'Omega Dokumentation',
  description: 'Dokumentation für Omega Module und Erweiterungen',
  base: '/',

   vite: {
      plugins: [
        vueJsx(),
      ],
    },

  head: [
    ['meta', { name: 'theme-color', content: '#086890' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  sitemap: {
    hostname: 'https://docs.omegasol.at/',
  },

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
          { text: 'PDF Versand', link: '/pdf_versand'},

        ]
      },
      { text: 'Support', link: 'https://www.omegasol.at/kundensupport/' }
    ],

    sidebar: {
      '/übersicht/':[
        {
          text: 'Übersicht',
        }
      ],
      '/lohn/': [
        {
          text: 'Lohn & Gehalt',
          collapsed: false,
          items: [
            { text: 'Übersicht', link: '/lohn/' },
            { text: 'Installation', link: '/lohn/installation' },
            { text: 'Einrichtung', link: '/lohn/einrichtung' },
            { text: 'Erste Schritte', link: '/lohn/erste-schritte' },
            { text: 'Bekannte Fehler', link: '/lohn/bekanntefehler' },
            { text: 'Lohnarten', link: '/lohn/lohnarten', collapsed: true, 
              items: [
                {
                  text: 'Lohnarten anlegen', link: '/lohn/lohnarten/lohnartenanlegen',
                }
              ]
            },
          ]
        }
        
      ],
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
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Dokumentation durchsuchen',
                buttonAriaLabel: 'Dokumentation durchsuchen',
              },

              modal: {
                displayDetails: 'Details anzeigen',
                resetButtonTitle: 'Suche zurücksetzen',
                backButtonTitle: 'Suche schließen',
                noResultsText: 'Keine Ergebnisse gefunden',

                footer: {
                  selectText: 'Auswählen',
                  selectKeyAriaLabel: 'Enter',
                  navigateText: 'Navigieren',
                  navigateUpKeyAriaLabel: 'Pfeil nach oben',
                  navigateDownKeyAriaLabel: 'Pfeil nach unten',
                  closeText: 'Schließen',
                  closeKeyAriaLabel: 'Escape',
                },
              },
            },
          },
        },
      },
    },

    footer: {
      message: 'Omega Solutions Software GmbH – Microsoft Dynamics 365 Business Central Lösungen',
      copyright: `© ${new Date().getFullYear()} Omega Solutions Software GmbH`
    }
  }
})
