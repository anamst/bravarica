import * as React from "react"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { Link } from "gatsby"
import { graphql } from 'gatsby';
import Card from '../components/card.js'


const ThankYouPage = () => {
    return (
        <main className="px-10 md:px-20 lg:px-32 pt-32 md:pt-44 text-normal bg-light h-screen">
           
            <div className="flex flex-col justify-around items-center mx-auto py-12 px-4 bg-header-light border rounded-md">
                <span className="text-lg text-center md:text-2xl font-naslovi">
                <Trans i18nKey="first">Hvala Vam na ukazanom povjerenju.</Trans></span>
                <span className="text-lg text-center py-8 md:text-2xl font-naslovi">
                <Trans i18nKey="second">Javit ćemo Vam se uskoro s potvrdom rezervacije.</Trans></span>
                <span className="text-lg uppercase underline font-naslovi">
                <Link to={`/`}><Trans i18nKey="link">Povratak na naslovnicu</Trans></Link></span>
            </div>


        </main>

    );
};

export default ThankYouPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["thankyou", "common"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;