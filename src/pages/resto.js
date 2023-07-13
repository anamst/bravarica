import * as React from "react"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import Layout from "../components/layout/layout.js"
import Button from '../components/button.js'
import { Link } from "gatsby"
import Card from '../components/card.js'
import restoran from '../images/restoran.jpeg'
import restoran1 from '../images/restoran1.jpeg'
import bravarica from '../images/bravarica.png'
import mijesana from '../images/mijesana.png'
import riblja from '../images/riblja.png'
import dinner from '../images/dinner.jpeg'
import FormNew from "../components/novo.js";
import happy1 from '../images/happy1.jpeg';
import happy2 from '../images/happy2.jpeg';
import happy3 from '../images/happy3.jpeg';





const RestoPage = () => {
    return ( 
    <Layout> 
        <img src={restoran} className="h-screen w-screen" />
        <section id="hero" className="px-10 lg:px-20 xl:px-32 py-12 lg:pt-20 2xl:pt-52 text-normal bg-light">
                <div className="flex flex-col justify-around items-center text-center">
                    <h1 className="text-4xl uppercase font-naslovi pt-20">
                        <Trans i18nKey="title">restoran</Trans>
                    </h1>
                    <p className="text-xl pt-10">
                        <Trans i18nKey="text1">
                    Terasa uz more u hladovini starih maslina s predivnim zalaskom sunca.</Trans></p>
                    <p className="text-xl pt-4">
                    <Trans i18nKey="text2">
                    Ukusna domaća hrana za turiste željne autohtonih okusa hrvatskih specijaliteta.</Trans> </p>
                    <p className="text-xl pb-10 pt-4">
                    <Trans i18nKey="text3">
                    Dopustite da Vas očaramo svojim ugodnih ambijentom, veselim zdravicama a ponekad i pjesmom uvijek opuštenih gostiju koji se kod nas osjećaju kao kod kuće i uvijek se s razlogom vraćaju. <br></br>
                    </Trans></p>
                </div>
        </section>

        <section  className="px-2 md:px-32 pt-20 pb-20 md:pt-32 font-menu text-menu-text opacity-95 bg-bg-dark">
    <h1 className="font-naslovi text-center text-5xl uppercase pb-12">Happy HOUr</h1>
        <div className="flex flex-col lg:flex-row justify-around items-center relative">
            <div className="flex flex-col items-center md:items-center justify-between ">
            <img src={happy1} className="w-full lg:w-1/2" />
                <h1 className="font-naslovi text-center text-5xl lg:text-6xl uppercase py-10"><Trans i18nKey="popust">10% popust na sve</Trans></h1>
                <h1 className="font-naslovi text-center text-5xl uppercase pb-12">14:00-16:00h</h1>
                <div className="flex flex-col lg:flex-row justify-around items-center">
                <img src={happy2} className="w-full lg:w-1/2 p-2" />
                <img src={happy3} className="w-full lg:w-1/2 p-2" />
                </div>
            </div>  
        </div>
    </section>

        <section className="px-10 md:px-32 pt-12 text-normal bg-light relative">
            <div className="flex flex-col justify-around items-center">
                <div>
                <h1 className="text-4xl uppercase py-20 font-naslovi"><Trans i18nKey="title2">preporuke</Trans></h1>                </div>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                    <div className="lg:w-1/3">
                    <span className="text-xl font-naslovi text-headlines pt-4" ><Trans i18nKey="text11">Plata "Bravarica"</Trans></span>
                    <p className="text-base pb-4"><Trans i18nKey="text12">Paški sir, kozji sir, med od domaće kadulje, marmelada, rajčica, paprika, sezonsko voće, domaće maslinovo ulje</Trans></p>
                    </div>
                    <img src={bravarica} className=' lg:w-1/2'></img>
                </div>
                <div className="flex flex-col lg:flex-row-reverse justify-between items-start lg:items-center pt-4">
                    <div className="lg:w-1/3">
                    <span className="text-xl font-naslovi text-headlines pt-4" ><Trans i18nKey="text21">"Miješana" plata</Trans></span>
                     <p className="text-base pb-4"><Trans i18nKey="text22">Carpaccio janjetina, govedina, svinjetina, umak s domaćim maslinovim uljem.</Trans></p>
                    </div>
                    <img src={mijesana} className='lg:w-1/2'></img>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-12">
                    <div className="lg:w-1/3">
                    <span className="text-xl pt-4 font-naslovi text-headlines" ><Trans i18nKey="text31">Riblja plata</Trans></span>
                    <p className="text-base pb-4 "><Trans i18nKey="text32">Carpaccio tuna, kozice, hobotnica, inćuni, domaće maslinovo ulje.</Trans></p>
                    </div>
                    <img src={riblja} className='lg:w-1/2'></img>
                </div>
                <div className="flex flex-col lg:flex-row-reverse justify-between items-start lg:items-center pt-12">
                    <div className="lg:w-1/3">
                    <span className="text-xl pt-4 font-naslovi text-headlines" ><Trans i18nKey="text41">Roštilj</Trans></span>
                    <p className="text-base pb-4"><Trans i18nKey="text42">Orada, brancin, janjetina, rumpsteak.</Trans></p>
                    </div>
                    <img src={restoran1} className='lg:w-1/2'></img>
                </div>
            </div>
        </section>
        <section className="px-2 pt-32 md:px-32 pb-20 md:pb-32 text-normal bg-light relative">
        <div className='flex flex-col lg:flex-row justify-around items-center pb-20'>   
            <div className="flex flex-col items-center justify-start px-10 md:px-0 xl:px-10">
                <div>
                <h1 className="text-center text-4xl uppercase font-naslovi">menu</h1>
                </div>
                <p className="py-8 text-lg w-full text-left"><Trans i18nKey="textmenu">Pogledajte naš menu prije dolaska i upoznajte se s hranom koju pripremamo.</Trans></p>
            </div>
            <Card className='flex flex-col items-center shadow-sm shadow-headline justify-around w-3/4 lg:w-1/2 px-12'>
                <img src={dinner} className='pb-6'></img>
                <div className="flex flex-col items-center justify-around">
                    <Button className="pr-12"><Link to={`/dinner`}><Trans i18nKey="our">naš menu</Trans></Link></Button>
                </div>
            </Card>
        </div>
    </section>
    <section id='contact' className="px-10 md:px-32 text-normal bg-light relative">
        <FormNew></FormNew>
    </section>
    </Layout>
    )
}

export default RestoPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["resto", "common"] }, language: { eq: $language } }
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

