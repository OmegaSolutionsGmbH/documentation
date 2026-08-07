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
          { text: 'PDF Versand', link: '/omega_pdf'},

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
        },
      ],
      '/omega_pdf/': [
        {
          text: 'Omega PDF',
          collapsed: false,
          items: [
            { text: 'Übersicht', link: '/omega_pdf/' },
            { text: 'Installation', link: '/omega_pdf/installation' },
            { text: 'Bekannte Fehler', link: '/omega_pdf/bekanntefehler' },
            { text: 'Einrichtung', link: '/omega_pdf/einrichtung', collapsed: true,
              items: [
                { text: 'Allgemeine Einrichtung', link: '/omega_pdf/einrichtung/einrichtung' },
                { text: 'E-Mail Einrichtung', link: '/omega_pdf/einrichtung/emaileinrichtung' },
                { text: 'Benutzereinrichtung', link: '/omega_pdf/einrichtung/benutzereinrichtung'},
                { text: 'Quick Setup', link: '/omega_pdf/einrichtung/quicksetup' },
              ]
            },
            { text: 'Berichtskonfiguration', link: '/omega_pdf/berichtskonfiguration'},          
            { text: 'Mailvorlage', link: '/omega_pdf/mailvorlage', collapsed: true,
              items: [
                { text: 'Platzhalter', link: '/omega_pdf/mailvorlage/platzhalter' },
              ]
            },
            { text: 'Berichte Verarbeiten', link: '/omega_pdf/berichteverarbeiten' },
            { text: 'Unterstützte Berichte', link: '/omega_pdf/unterstützteBerichte' },
          ]
        },
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
      message: `
        <a href="https://www.omegasol.at/impressum/">Impressum</a>
        ·
        <a href="https://www.omegasol.at/datenschutz/">Datenschutz</a>
      `,
      copyright: `© ${new Date().getFullYear()} Omega Solutions Software GmbH`
    }
  }
})
