import * as React from "react"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import Layout from "../components/layout/layout.js"
import Button from "../components/button.js"
import Hero from "../components/hero.js"
import Card from '../components/card.js'
import { Link } from "gatsby"
import kitchen1 from '../images/kitchen1.jpeg'
import kitchen2 from '../images/kitchen2.jpeg'
import kitchen3 from '../images/kitchen3.jpeg'
import kitchen4 from '../images/kitchen4.jpeg'
import happy3 from '../images/happy3.jpeg'
import happy1 from '../images/happy1.jpeg'
import happy2 from '../images/happy2.jpeg'
import resto2 from '../images/resto2.jpeg'
import app1 from '../images/app1.jpeg'
import app2 from '../images/app2.jpeg'
import debela from '../images/debela.png'
import { SEO } from '../components/seo'



const HomePage = ({data}) => {
    const { t } = useTranslation();
    return ( 
    <Layout> 
    <Hero />
    <section className="px-10 md:px-20 lg:px-32 pt-12 md:pt-32 text-normal">
        <div className="flex flex-col xl:flex-row items-start justify-start py-4">
            <div className="flex flex-col items-center md:items-start justify-between pb-8 w-full lg:w-1/2">
                <h1 className="font-naslovi text-left text-4xl uppercase text-headlines"><Trans i18nKey="title">upoznajte nas</Trans></h1>
                <p className="pt-6 text-xl lext-center lg:text-left "><Trans i18nKey="toptext1">Ukusna domaća hrana za turiste željne autohtonih okusa hrvatskih specijaliteta.</Trans> </p>
                <p className="text-lg pt-2 lg:pt-3 font-thin"><Trans i18nKey="toptext2">Dopustite da Vas očaramo svojim ugodnih ambijentom, veselim zdravicama a ponekad i pjesmom uvijek opuštenih gostiju koji se kod nas osjećaju kao kod kuće i uvijek se s razlogom vraćaju. Želimo ovu ljepotu i mir podijeliti s Vama i ponuditi Vam gostoprimstvo u našim apartmanima i restoranu.</Trans> </p>
                <p className="text-xl pt-2 lg:pt-4 py-6 font-bold"><Trans i18nKey="toptext3">DOBRO DOŠLI!</Trans></p> 
                <Button><Link to={`/resto/#contact`}><Trans i18nKey="reserve">rezerviraj</Trans></Link></Button>
            </div>
            <div className="container grid grid-cols-2  gap-6">
                <div className="px-2">
                    <img src={kitchen1} className='border border-blue-dark'></img>
                </div>
                <div className="px-2">
                    <img src={kitchen2} className='border border-blue-dark'></img>
                </div>
                <div className="px-2">
                    <img src={kitchen3} className='border border-blue-dark'></img>
                </div>
                <div className="px-2">
                    <img src={kitchen4} className='border border-blue-dark'></img>
                </div>
            </div>  
        </div>
    </section>
    <section className="px-2 md:px-32 pt-20 md:pt-32 text-normal bg-light">
        <div className="flex flex-col lg:flex-row-reverse items-start justify-start pt-8">
            <div className="flex flex-col items-center md:items-start justify-around px-8 pb-8">
                <h1 className="font-naslovi text-left text-4xl uppercase text-headlines"><Trans i18nKey="title2">Restoran</Trans></h1>
                <p className="py-6 text-xl text-center w-full md:text-left md:w-3/4"><Trans i18nKey="textresto">Terasa uz more u hladovini starih maslina s predivnim zalaskom sunca. Ukusna domaća hrana: paški sir, janjetina, riba, domaći kruh...</Trans></p>
                <div className="flex flex-col items-center justify-center md:flex-row">
                <Button className="p-12 inline-block"><Link to={`/resto`}><Trans i18nKey="title2">restoran</Trans></Link></Button>
                <Button className="pr-12 inline-block"><Link to={`/dinner`}><Trans i18nKey="our">naš menu</Trans></Link></Button>
                </div>
            </div> 
            <div className="px-2 pb-6">
                <img src={resto2} className=" border border-blue-dark"></img>
            </div>
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
    <section className="px-2 md:px-32 pt-20 pb-20 md:pt-32 text-normal bg-light">
        <div className='hidden md:flex md:flex-row md:justify-around md:items-center'>
            <Card className='w-1/2 shadow-sm shadow-headline px-12'>
                <img src={app1} className="border border-blue-dark"></img>
                <div className="flex flex-col items-center justify-around">
                    <h1 className="uppercase text-xl py-4 font-naslovi"><Trans i18nKey="appartment1">apartman 1</Trans></h1>
                    <a href ="https://www.booking.com/hotel/hr/bravarica-apartments.hr.html" target="_blank"><Button><Trans i18nKey="reserve">rezerviraj</Trans></Button></a> 
                </div>
            </Card>
            <div className="flex flex-col items-center justify-start px-8">
                <h1 className="text-left text-4xl uppercase font-naslovi"><Trans i18nKey="appartments"> Apartmani</Trans></h1>
                <p className="py-6 text-lg text-left"><Trans i18nKey="textapp"> Blizina mora, bez gužve, zvukovi i mirisi prirode, šum mora i predivni zalazak.</Trans></p>
                <Button><Link to={`/appartments`}><Trans i18nKey="appartments">Apartmani</Trans></Link></Button>
            </div>
            <Card className='w-1/2 shadow-sm shadow-headline px-12'>
                <img src={app2} className="border border-blue-dark"></img>
                <div className="flex flex-col items-center justify-around">
                    <h1 className="uppercase text-xl py-4 font-naslovi"><Trans i18nKey="appartment2">apartman 2</Trans></h1>
                    <a href="https://www.booking.com/hotel/hr/bravarica-apartments.hr.html" target="_blank"><Button><Trans i18nKey="reserve">rezerviraj</Trans></Button></a> 
                </div>
            </Card>
        </div>
        <div className='flex flex-col justify-around items-center md:hidden'>
            <div className="flex flex-col items-center justify-start pb-6">
                <h1 className="text-left text-4xl uppercase font-naslovi"><Trans i18nKey="appartments">Apartmani</Trans></h1>
                <p className="p-8 text-lg text-left"><Trans i18nKey="textapp"> Blizina mora, bez gužve, zvukovi i mirisi prirode, šum mora i predivni zalazak.</Trans></p>
                <Button><Link to={`/appartments`}><Trans i18nKey="appartments">Apartmani</Trans></Link></Button>
            </div>
            <Card className='w-3/4 pb-6 shadow-sm shadow-headline px-12'>
                <img src={app1} className="border border-blue-dark"></img>
                <div className="flex flex-col items-center justify-around">
                    <h1 className="uppercase text-xl py-4 font-naslovi"><Trans i18nKey="appartment1">apartman 1</Trans></h1>
                    <a href="https://www.booking.com/hotel/hr/bravarica-apartments.hr.html" target="_blank"><Button><Trans i18nKey="reserve">rezerviraj</Trans></Button></a> 
                </div>
            </Card>
            <Card className='w-3/4 mt-6 shadow-sm shadow-headline px-12'>
                <img src={app2} className="border border-blue-dark"></img>
                <div className="flex flex-col items-center justify-around">
                    <h1 className="uppercase text-xl py-4 font-naslovi"><Trans i18nKey="appartment2">apartman 2</Trans></h1>
                    <a href="https://www.booking.com/hotel/hr/bravarica-apartments.hr.html" target="_blank"><Button><Trans i18nKey="reserve">rezerviraj</Trans></Button></a> 
                </div>
            </Card>
        </div>
    </section>
    </Layout>
    )
}

export default HomePage

export const Head = () => {
    <SEO />

}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index", "common"] }, language: { eq: $language } }
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
