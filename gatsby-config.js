/**
 * @type {import('gatsby').GatsbyConfig}
 */
 module.exports = {
    siteMetadata: {
        title: `OPG-Bravarica`,
        description:`Family restaurant and apartments for rent on the island Pag, at beautiful Adriatic sea at open bay for boats.`,
        siteUrl: `https://www.bravarica-kusaona.hr`,
    },
    plugins: [
        "gatsby-plugin-netlify",
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
              localeJsonSourceName: `locale`,
              languages: [`hr`, `en`, `de`, `it`],
              defaultLanguage: `hr`,
              siteUrl: `http://localhost:8000/`,
              i18nextOptions: {
                fallbackLng: `hr`,
                supportedLngs: [`hr`, `en`, `de`, `it`],
                defaultNS: 'common',
                interpolation: {
                  escapeValue: false, 
                }
              },
            },
          }, 
        
    ],
}