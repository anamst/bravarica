import * as React from "react"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import Layout from "../components/layout/layout.js"
import Button from "../components/button.js"
import kitchen1 from '../images/kitchen1.jpeg'
import kitchen2 from '../images/kitchen2.jpeg'
import kitchen3 from '../images/kitchen3.jpeg'
import kitchen4 from '../images/kitchen4.jpeg'
import debela from '../images/debela.png'
import { Link } from "gatsby"


const AboutPage = () => {
    return ( 
    <Layout> 
        <section className="px-10 md:px-32 pt-20 md:pt-44 text-normal bg-light 2xl:h-full">
        <div className="flex flex-col lg:flex-row-reverse items-start justify-start py-4">
            <div className="flex flex-col items-start justify-around px-8 pb-8 relative">
                <h1 className="text-left text-3xl uppercase font-naslovi"><Trans i18nKey="title"> o nama</Trans></h1>
                <img src={debela} className="w-80 pb-8" />

                <p className="py-6 text-lg text-left w-3/4"><Trans i18nKey="text">Mi smo autohtona obitelj ovoga kraja koja već više generacija živi na ovom prekrasnom mjestu. Želimo ovu ljepotu i mir podijeliti s Vama i ponuditi Vam gostoprimstvo u našim apartmanima i restoranu. DOBRO DOŠLI!</Trans> </p>
                    <div className="flex flex-row justify-between py-4">
                    <span className="font-semibold text-lg uppercase pr-4 font-naslovi">
                    <Trans i18nKey="hours">radno vrijeme: </Trans>
                    </span>
                    <span className="text-lg">
                        <Trans i18nKey="hrs">
                        Od Ponedjeljka do subote 14:00-22:00</Trans>
                    </span>
                </div>
                <div className="flex flex-row justify-between items-baseline pb-2">
                    <span className="font-semibold text-lg uppercase font-naslovi pr-4">
                    <Trans i18nKey="tel">
                        Telefon: </Trans>
                    </span>
                    <a href='tel:+385 53 881 430' className='text-base text-blue-dark mr-auto text-naslovi text-right'>+385 53 881 430</a>
                </div>
                <div className="flex flex-row justify-between items-baseline pb-4">
                    <span className="font-semibold text-lg uppercase font-naslovi pr-4">
                    <Trans i18nKey="mob">
                        Mobitel: </Trans>
                    </span>
                    <a href='tel:+385 95 511 4567' className='text-base text-blue-dark pb-2 mr-auto text-naslovi text-right'>+385 95 511 4567</a>
                </div>
                <div className="flex flex-row justify-between items-baseline pb-2">
                    <span className="font-semibold text-lg uppercase font-naslovi pr-4">
                        Email: 
                    </span>
                    <a href="mailto:bravarica.pende@gmail.com" target="_blank"> <span className="text-lg text-right">
                        bravarica.pende@gmail.com
                    </span></a>
                </div>
                <div className="flex flex-row justify-between items-baseline pb-2">
                    <span className="font-semibold text-lg uppercase font-naslovi pr-4">
                    <Trans i18nKey="adres">
                        Adresa: </Trans>
                    </span>
                    <span className="text-lg text-right">
                        Šonjevi stani 31a, 53291 Novalja
                    </span>
                </div>
              <Link to={`/resto/#contact`}
              ><Button><Trans i18nKey="reserve">rezervirajte</Trans></Button></Link>  

            </div>
            <div className="container grid grid-cols-2 gap-4">
                <div className="px-2">
                    <img src={kitchen1} className="border border-blue-dark"></img>
                </div>
                <div className="px-2">
                    <img src={kitchen2} className="border border-blue-dark"></img>
                </div>
                <div className="px-2">
                    <img src={kitchen3} className="border border-blue-dark"></img>
                </div>
                <div className="px-2">
                    <img src={kitchen4} className="border border-blue-dark"></img>
                </div>
            </div>   
        </div>
    </section>
    
    </Layout>
    )
}

export default AboutPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["about", "common"] }, language: { eq: $language } }
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