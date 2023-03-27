import * as React from "react"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import Layout from "../components/layout/layout.js"
import Button from '../components/button.js'
import Form from "../components/form.js"
import { Link } from "gatsby"
import Card from '../components/card.js'
import restoran from '../images/restoran.jpeg'
import bravplata from '../images/bravplata.png'
import mijesanaplata from '../images/mijesanaplata.png'
import preporuka3 from '../images/preporuka3.jpeg'
import preporuka4 from '../images/preporuka4.jpeg'
import dinner from '../images/dinner.jpeg'
import debela from '../images/debela.png'




const RestoPage = () => {
    return ( 
    <Layout> 
        <section id="hero" className="px-10 lg:px-32 pt-32 md:pt-44 text-normal bg-light">
            <div className="flex flex-col xl:flex-row justify-around items-end">
                <div className="flex flex-col justify-around items-start lg:pr-32">

                    <h1 className="text-4xl uppercase font-naslovi text-center pt-20">
                        <Trans i18nKey="title1">restoran</Trans>
                    </h1>
                    <img src={debela} className="w-80 pb-8" />
                    <p className="text-xl pt-10">
                        <Trans i18nKey="text1">
                    Terasa uz more u hladovini starih maslina s predivnim zalaskom sunca.</Trans></p>
                    <p className="text-xl ">
                    <Trans i18nKey="text2">
                    Ukusna domaća hrana za turiste željne autohtonih okusa hrvatskih specijaliteta.</Trans> </p>
                    <p className="text-xl pb-10">
                    <Trans i18nKey="text3">
                    Dopustite da Vas očaramo svojim ugodnih ambijentom, veselim zdravicama a ponekad i pjesmom uvijek opuštenih gostiju koji se kod nas osjećaju kao kod kuće i uvijek se s razlogom vraćaju. <br></br>
                    </Trans></p>
                </div>
                <div className="relative" >
                    <img src={restoran} className="border border-blue-dark"></img>
                </div>
            </div>
        </section>
        <section className="px-10 md:px-32 pt-20 lg:pt-32 text-normal bg-light">
            <div className="flex flex-col justify-around items-center">
                <div>
                <h1 className="text-4xl uppercase pt-24 font-naslovi"><Trans i18nKey="title2">preporuke</Trans></h1>
                <img src={debela} className="w-80 pb-12 mx-auto" />
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                    <div className="relative">
                    <span className="text-xl font-naslovi text-headlines pt-4" ><Trans i18nKey="text11">Plata "Bravarica"</Trans></span>
                    <p className="text-base pb-4"><Trans i18nKey="text12">Paški sir, kozji sir, med od domaće kadulje, marmelada, rajčica, paprika, sezonsko voće, domaće maslinovo ulje</Trans></p>
                    </div>
                    <img src={bravplata} className='lg:w-1/3 border border-blue-dark'></img>
                </div>
                <div className="flex flex-col lg:flex-row-reverse justify-between items-start lg:items-center pt-12">
                    <div>
                    <span className="text-xl font-naslovi text-headlines pt-4" ><Trans i18nKey="text21">"Miješana" plata</Trans></span>
                     <p className="text-base pb-4"><Trans i18nKey="text22">Carpaccio janjetina, govedina, svinjetina, umak s domaćim maslinovim uljem.</Trans></p>
                    </div>
                    <img src={mijesanaplata} className='border border-blue-dark lg:w-1/3'></img>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-12">
                    <div>
                    <span className="text-xl pt-4 font-naslovi text-headlines" ><Trans i18nKey="text31">Riblja plata</Trans></span>
                    <p className="text-base pb-4 "><Trans i18nKey="text32">Carpaccio tuna, kozice, hobotnica, inćuni, domaće maslinovo ulje.</Trans></p>
                    </div>
                    <img src={preporuka3} className='border border-blue-dark lg:w-1/3'></img>
                </div>
                <div className="flex flex-col lg:flex-row-reverse justify-between items-start lg:items-center pt-12">
                    <div>
                    <span className="text-xl pt-4 font-naslovi text-headlines" ><Trans i18nKey="text41">Roštilj</Trans></span>
                    <p className="text-base pb-4"><Trans i18nKey="text42">Orada, brancin, janjetina, rumpsteak.</Trans></p>
                    </div>
                    <img src={preporuka4} className='border border-blue-dark lg:w-1/3'></img>
                </div>
            </div>
        </section>
        <section className="px-10 pt-20 lg:pt-32 md:px-32 pb-20 md:pb-32 text-normal bg-light">
        <div className='flex flex-col lg:flex-row justify-around items-center pb-20'>
            
            <div className="flex flex-col items-center justify-start px-20">
                <div>
                <h1 className="text-center text-3xl uppercase font-naslovi">menu</h1>
                <img src={debela} className="w-80 mx-auto" />
                </div>
                
                <p className="py-8 text-lg text-left"><Trans i18nKey="textmenu">Pogledajte naš menu prije dolaska i upoznajte se s hranom koju pripremamo.</Trans></p>

            </div>
            <Card className='flex flex-col items-center shadow-sm shadow-headline justify-around w-3/4 lg:w-1/2'>
                <img src={dinner} className='pb-6'></img>
                <div className="flex flex-col items-center justify-around">
                    <Button className="pr-12"><Link to={`/dinner`}><Trans i18nKey="our">naš menu</Trans></Link></Button>
                </div>
            </Card>
        </div>
    </section>
    <section id='contact' className="px-10 md:px-32 pt-32 text-normal bg-light relative">
        <Form></Form>
    </section>
    </Layout>
    )
}

export default RestoPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
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

