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
        <section className="">
            <div className="px-12 lg:px-32 pt-48 pb-20 relative">
                <h1 className="text-4xl text-center text-strong uppercase font-naslovi">
                    Menu
                </h1>
                <img src={debela} className="w-80 mx-auto" />

                <div className="pt-24">
                <h1 className="text-3xl text-left text-strong uppercase font-naslovi">
                    Predjela
                </h1>
                <img src={debela} className="w-80" />
                <div className="flex flex-col lg:flex-row flex-wrap justify-between items-center">
                <Card className='text-center shadow-none lg:w-1/2'> 
                <p className="text-2xl pt-4">Plata "Bravarica"</p>
                <img src={bravplata} className="" />
                </Card>
                <Card className='text-center shadow-none lg:w-1/2'>
                <p className="text-2xl pt-4">Plata "Miješana"</p>
                <img src={mijesanaplata} className="" />
                </Card>
                <Card className='text-center shadow-none lg:w-1/2'>
                <p className="text-2xl pt-4">Carpaccio "Riba"</p>
                <img src={carpaccioriba} className="" />
                </Card>
                <Card className='text-center shadow-none lg:w-1/2'>
                <p className="text-2xl pt-4">Carpaccio "Meso"</p>
                <img src={carpacciomeso} className="" />
                </Card>
                <Card className='text-center shadow-none lg:w-1/2'>
                <p className="text-2xl pt-4">Omlet "Hobotnica"</p>
                <img src={omlethobotnica} className="rounded" />
                </Card>
                <Card className='text-center shadow-none lg:w-1/2'>
                <p className="text-2xl pt-4">Omlet "Šparoge"</p>
                <img src={omletsparoge} className="rounded p-4" />
                </Card>
                </div>
                
                <h1 className="text-3xl text-left text-strong uppercase font-naslovi pt-32">
                    Jela na žlicu
                </h1>
                <img src={debela} className="w-80" />
                <p className="text-xl pt-4">Brodit s palentom (škarpina, grdobina)</p>
                <p className="text-xl pt-4">Buzara (kozice, školjke, cešnjak, luk)</p>
                <p className="text-xl pt-4">Lešada (grdobina, kozice)</p>
                <h1 className="text-3xl text-left text-strong uppercase font-naslovi pt-32">
                    Roštilj
                </h1>
                <img src={debela} className="w-80" />
                <div className="flex flex-col lg:flex-row flex-wrap justify-between items-center">
                <Card className='text-center shadow-none lg:w-1/2'> 
                <p className="text-2xl pt-4">Orada</p>
                <img src={orada} className="" />
                </Card>
                <Card className='text-center shadow-none lg:w-1/2'>
                <p className="text-2xl pt-4">Brancin</p>
                <img src={brancin} className="" />
                </Card>
                <Card className='text-center shadow-none lg:w-1/2'>
                <p className="text-2xl pt-4">Janjetina</p>
                <img src={janjetina} className="" />
                </Card>
                <Card className='text-center shadow-none lg:w-1/2'>
                <p className="text-2xl pt-4">Rumpsteak</p>
                <img src={ramstek} className="" />
                </Card>
                <Card className='text-center shadow-none lg:w-1/2'>
                <p className="text-2xl p-4">Svinjski kotlet od crne slavonske svinje</p>
                <img src={oinklogo} className="border-2 inline" />
                </Card>
                </div>
                
                <h1 className="text-3xl text-left text-strong uppercase font-naslovi pt-32">
                    Desert
                </h1>
                <img src={debela} className="w-80" />
                <div className="flex flex-col lg:flex-row flex-wrap justify-between items-center">
                <Card className='text-center shadow-none lg:w-1/2'>
                <p className="text-2xl pt-4">Smokvenjak"</p>
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