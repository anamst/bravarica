import * as React from "react"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import Button from "../components/button.js"
import Card from "../components/card.js"
import Layout from "../components/layout/layout.js"
import app1 from '../images/app1.jpeg'
import app2 from '../images/app2.jpeg'
import apartmani from '../images/apartmani.jpeg'
import debela from '../images/debela.png'



const AppartmentPage = () => {
    return ( 
        <Layout> 
        <section id="hero" className="px-10 lg:px-20 xl:px-32  pt-20 md:pt-32 text-normal bg-light">
            <div className="flex flex-col lg:hidden justify-around items-start xl:items-center">
                <div className="flex flex-col justify-around items-start">
                    <h1 className="text-4xl uppercase pt-12 lg:pr-52 font-naslovi">
                        <Trans i18nKey="title">
                        apartmani</Trans>
                    </h1>
                    <img src={debela} className="w-80 pb-12" />

                    <p className="text-2xl font-naslovi">
                    <Trans i18nKey="title1">
                    ODMOR ZA DUŠU I TIJELO.</Trans>
                    </p>
                    <p className="text-xl pt-12 font-naslovi" ><Trans i18nKey="title2">Doživite</Trans></p>
                    <ul className="list-none text-lg py-2 pb-10">
                        <li><Trans i18nKey="li1">buđenje u zoru i promatranje rađanja dana</Trans></li>
                        <li><Trans i18nKey="li2">jutarnje kupanje u predivnom čistom moru</Trans></li>
                        <li><Trans i18nKey="li3">odmaranje na terasi u hladovini loze uz more</Trans></li>
                        <li><Trans i18nKey="li4">kupanje na vlastitoj plaži</Trans></li>
                        <li><Trans i18nKey="li5">promatranje zalaska sunca</Trans></li>
                        <li><Trans i18nKey="li6">noćno kupanje</Trans></li>
                        <li><Trans i18nKey="li7">zvjezdano nebo do mile volje</Trans></li>
                        <li><Trans i18nKey="li8">spavanje uz šum valova</Trans></li>
                        <li><Trans i18nKey="li9">mogućnost uživanja u domaćoj hrani u našem restoranu</Trans></li>
                    </ul>
                </div>
                <div>
                    <img src={apartmani} className='border border-blue-dark lg:hidden'></img>
                </div>   
            </div>
            <div className="relative hidden lg:block ">
                <img src={apartmani} className='border border-blue-dark w-1/2 fixed top-20 right-0'></img>
                <div className="flex flex-col justify-around items-start">
                    <h1 className="text-4xl uppercase lg:pr-52 font-naslovi">
                        <Trans i18nKey="title">
                        apartmani</Trans>
                    </h1>
                    <img src={debela} className="w-80 pb-12" />

                    <p className="text-2xl font-naslovi">
                    <Trans i18nKey="title1">
                    ODMOR ZA DUŠU I TIJELO.</Trans>
                    </p>
                    <p className="text-xl pt-12 font-naslovi" ><Trans i18nKey="title2">Doživite</Trans></p>
                    <ul className="list-none text-lg py-2 pb-10 w-1/2">
                        <li><Trans i18nKey="li1">buđenje u zoru i promatranje rađanja dana</Trans></li>
                        <li><Trans i18nKey="li2">jutarnje kupanje u predivnom čistom moru</Trans></li>
                        <li><Trans i18nKey="li3">odmaranje na terasi u hladovini loze uz more</Trans></li>
                        <li><Trans i18nKey="li4">kupanje na vlastitoj plaži</Trans></li>
                        <li><Trans i18nKey="li5">promatranje zalaska sunca</Trans></li>
                        <li><Trans i18nKey="li6">noćno kupanje</Trans></li>
                        <li><Trans i18nKey="li7">zvjezdano nebo do mile volje</Trans></li>
                        <li><Trans i18nKey="li8">spavanje uz šum valova</Trans></li>
                        <li><Trans i18nKey="li9">mogućnost uživanja u domaćoj hrani u našem restoranu</Trans></li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="px-2 md:px-32 py-20 md:py-44 text-normal bg-light relative">

        <div className='hidden lg:flex lg:flex-row lg:justify-around lg:items-center'>

            <Card className='shadow-sm shadow-headline w-1/3 px-12'>
                <img src={app1}></img>
                <div className="flex flex-col items-center justify-around">
                    <h1 className="uppercase text-xl py-4 font-naslovi"><Trans i18nKey="appartment1">apartman 1</Trans></h1>
                   <a href="https://www.booking.com/hotel/hr/bravarica-apartments.hr.html" target="_blank"><Button><Trans i18nKey="reservation">rezerviraj</Trans></Button></a> 
                </div>
            </Card>
            
            <Card className='shadow-sm shadow-headline w-1/3 px-12'>
                <img src={app2}></img>
                <div className="flex flex-col items-center justify-around">
                    <h1 className="uppercase text-xl py-4 font-naslovi"><Trans i18nKey="appartment2">apartman 2</Trans></h1>
                    <a href="https://www.booking.com/hotel/hr/bravarica-apartments.hr.html" target="_blank"><Button><Trans i18nKey="reservation">rezerviraj</Trans></Button></a> 
                </div>
            </Card>
        </div>        
        <div className='flex flex-col justify-around items-center lg:hidden'>
            <Card className='shadow-sm shadow-headline w-3/4 pb-6 px-12'>
                <img src={app1}></img>
                <div className="flex flex-col items-center justify-around">
                    <h1 className="uppercase text-xl py-4 font-naslovi"><Trans i18nKey="appartment1">apartman 1</Trans></h1>
                    <a href="https://www.booking.com/hotel/hr/bravarica-apartments.hr.html" target="_blank"><Button><Trans i18nKey="reservation">rezerviraj</Trans></Button></a> 
                </div>
            </Card>
            <Card className='shadow-sm shadow-headline w-3/4 mt-6 px-12'>
                <img src={app2}></img>
                <div className="flex flex-col items-center justify-around">
                    <h1 className="uppercase text-xl py-4 font-naslovi"><Trans i18nKey="appartment2">apartman 2</Trans></h1>
                    <a href="https://www.booking.com/hotel/hr/bravarica-apartments.hr.html" target="_blank"><Button><Trans i18nKey="reservation">rezerviraj</Trans></Button></a> 
                </div>
            </Card>
        </div>
    </section>
    
    </Layout>
    )
}

export default AppartmentPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["appartments", "common"] }, language: { eq: $language } }
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