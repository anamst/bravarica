import * as React from "react"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import Layout from "../components/layout/layout.js"
import omletsparoge from "../images/os.png"
import omlethobotnica from "../images/oh.png"
import ramstek from "../images/rr.png"
import carpaccioriba from "../images/cr.png"
import carpacciomeso from "../images/cm.png"
import janjetina from "../images/rj.png"
import bravplata from "../images/pb.png"
import mijesanaplata from "../images/pm.png"
import orada from "../images/ro.png"
import brancin from "../images/rb.png"
import smokvenjak from "../images/sm.png"
import oinklogo from "../images/oinklogo.png"
import debela from '../images/debela.png'
import Card from "../components/card.js"

const Dinner = () => {
    return ( 
    <Layout> 
        <section className="px-2">
            <div className="lg:px-32 pt-32 pb-20 relative">
                <h1 className="text-4xl text-center text-strong uppercase font-naslovi">
                    Menu
                </h1>
                <img src={debela} className="w-80 mx-auto" />

                <div className="pt-24">
                <h1 className="text-3xl text-left pl-12 lg:pl-0 text-strong uppercase font-naslovi">
                <Trans i18nKey="starter">
                    Predjela</Trans>
                </h1>
                <img src={debela} className="w-80" />
                <div className="flex flex-col lg:flex-row flex-wrap justify-between items-center">
                <Card className='text-center shadow-none lg:w-1/2'> 
                <p className="text-2xl pt-4">
                <Trans i18nKey="s1">
                  Plata "Bravarica"</Trans></p>
                <img src={bravplata} className="" />
                </Card>
                <Card className='text-center shadow-none lg:w-1/2'>
                <p className="text-2xl pt-4">
                <Trans i18nKey="s2">Plata "Miješana"</Trans></p>
                <img src={mijesanaplata} className="" />
                </Card>
                <Card className='text-center shadow-none lg:w-1/2'>
                <p className="text-2xl pt-4">
                <Trans i18nKey="s3">Carpaccio "Riba"</Trans></p>
                <img src={carpaccioriba} className="" />
                </Card>
                <Card className='text-center shadow-none lg:w-1/2'>
                <p className="text-2xl pt-4">
                <Trans i18nKey="s4">Carpaccio "Meso"</Trans></p>
                <img src={carpacciomeso} className="" />
                </Card>
                <Card className='text-center shadow-none lg:w-1/2'>
                <p className="text-2xl pt-4">
                <Trans i18nKey="s5">Omlet "Hobotnica"</Trans></p>
                <img src={omlethobotnica} className="rounded" />
                </Card>
                <Card className='text-center shadow-none lg:w-1/2'>
                <p className="text-2xl pt-4">
                <Trans i18nKey="s6">Omlet "Šparoge"</Trans></p>
                <img src={omletsparoge} className="rounded p-4" />
                </Card>
                </div>
                
                <h1 className="text-3xl pl-12 lg:pl-0 text-left text-strong uppercase font-naslovi pt-32">
                <Trans i18nKey="main">
                    Jela na žlicu</Trans>
                </h1>
                <img src={debela} className="w-80" />
                <p className="text-xl pt-4 pl-8 lg:pl-0">
                <Trans i18nKey="m1">Brodit s palentom (škarpina, grdobina)</Trans></p>
                <p className="text-xl pt-4 pl-8 lg:pl-0">
                  <Trans i18nKey="m2">Buzara (kozice, školjke, cešnjak, luk)</Trans></p>
                <p className="text-xl pt-4 pl-8 lg:pl-0">
                  <Trans i18nKey="m3">Lešada (grdobina, kozice)</Trans></p>
                <h1 className="text-3xl pl-8 lg:pl-0 text-left text-strong uppercase font-naslovi pt-32">
                  <Trans i18nKey="bbq">
                    Roštilj</Trans>
                </h1>
                <img src={debela} className="w-80" />
                <div className="flex flex-col lg:flex-row flex-wrap justify-between items-center">
                <Card className='text-center shadow-none lg:w-1/2'> 
                <p className="text-2xl pt-4">
                <Trans i18nKey="b1">Orada</Trans></p>
                <img src={orada} className="" />
                </Card>
                <Card className='text-center shadow-none lg:w-1/2'>
                <p className="text-2xl pt-4">
                <Trans i18nKey="b2">Brancin</Trans></p>
                <img src={brancin} className="" />
                </Card>
                <Card className='text-center shadow-none lg:w-1/2'>
                <p className="text-2xl pt-4">
                <Trans i18nKey="b3">Janjetina</Trans></p>
                <img src={janjetina} className="" />
                </Card>
                <Card className='text-center shadow-none lg:w-1/2'>
                <p className="text-2xl pt-4">
                <Trans i18nKey="b4">Rumpsteak</Trans></p>
                <img src={ramstek} className="" />
                </Card>
                <Card className='text-center shadow-none lg:w-1/2'>
                <p className="text-2xl p-4">
                <Trans i18nKey="b5">Svinjski kotlet od crne slavonske svinje</Trans></p>
                <img src={oinklogo} className="border-2 inline" />
                </Card>
                </div>
                
                <h1 className="text-3xl pl-12 lg:pl-0 text-left text-strong uppercase font-naslovi pt-32">
                <Trans i18nKey="des"> Desert</Trans> 
                </h1>
                <img src={debela} className="w-80" />
                <div className="flex flex-col lg:flex-row flex-wrap justify-between items-center">
                <Card className='text-center shadow-none lg:w-1/2'>
                <p className="text-2xl pt-4">
                <Trans i18nKey="d1">Smokvenjak"</Trans></p>
                <img src={smokvenjak} className="" />
                </Card>
                </div>
                </div>
            </div>                
        </section>
    </Layout>
    )
}

export default Dinner

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["dinner", "common"] }, language: { eq: $language } }
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