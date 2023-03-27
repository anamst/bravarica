/**
 * @type {import('gatsby').GatsbyConfig}
 */
 import { languages, defaultLanguage } from './src/locales/languages.js';
 module.exports = {
    siteMetadata: {
        title: `OPG-Bravarica`,
        description:`Restaurant and family apartments on the island Pag, in beautiful Adriatic sea at open bay for boats.`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        'gatsby-plugin-postcss',
        {
            resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
            `Oswald`,
            `Fira`,
        ],
        display: 'swap'
      },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/src/locales`,
              name: `locale`
            }
          },
          {
            resolve: 'gatsby-plugin-react-i18next',
            options: {
              languages,
              defaultLanguage,
              siteUrl,
              i18nextOptions: {
                fallbackLng: defaultLanguage,
                supportedLngs: languages,
                defaultNS: 'common',
                interpolation: {
                  escapeValue: false, 
                }
              },
            },
          }, 
        
    ],
}