import * as React from "react"
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import Layout from "../components/layout/layout.js"
import Card from "../components/card.js";
import { Link } from "gatsby";
import beef from "../images/beef.png"
import cheese from "../images/cheese.png"
import dalmacija from "../images/dalmacija.png"
import drink from "../images/drink.png"
import drinks from "../images/drinks.png"
import fig from "../images/fig.png"
import fish from "../images/fish.png"
import food from "../images/food.png"
import kamenice from "../images/kamenice.png"
import lamb from "../images/lamb.png"
import lesada from "../images/lesada.png"
import meat from "../images/meat.png"
import omelettea from "../images/omelettea.png"
import omeletteo from "../images/omeletteo.png"
import pancakes from "../images/pancakes.png"
import rump from "../images/rump.png"
import seabass from "../images/seabass.png"
import seabream from "../images/seabream.png"
import shells from "../images/shells.png"
import tartuf from "../images/tartuf.png"
import tuna from "../images/tuna.png"

const Dinner = () => {
    return ( 
    <Layout > 
      <main className="bg-bg-dark w-full text-menu-text font-menu"> 
        <section className="px-10 lg:px-20 xl:px-32 py-12 lg:pt-20 2xl:pt-52">
          <img src={food} className=""  />
        </section>
        <section className="px-10 md:px-32 lg:py-12 relative">
          <div className="border-y border-menu-text">
            <h1 className="uppercase font-500 text-xl lg:text-3xl text-center py-4 lg:py-8"><Trans i18nKey="predjela">hladna predjela</Trans></h1>
          </div>
          <div className="flex flex-col justify-around pt-8 lg:pt-20">
            <div className="flex flex-row justify-around items-center">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="small">small</Trans></p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">20 €  (150,69 kn)</p>
            </div>
            <div className="flex flex-row justify-around items-center lg:pt-6">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="medium">medium</Trans></p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">35 €  (263,70 kn)</p>
            </div>
            <div className="flex flex-row justify-around items-center lg:pt-6">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="velika">large</Trans></p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">50 €  (376,72 kn)</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-around items-center pt-8 lg:pt-12">
            <Card className='flex flex-col items-center justify-around w-full lg:w-1/2 px-12 text-center'>
              <img src={cheese}></img>
              <p className="uppercase font-menu text-menu-text text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="brava">Plata sira</Trans> <span className="font-semibold">"Bravarica"</span></p>
            </Card>
            <Card className='flex flex-col items-center justify-around w-full lg:w-1/2 px-12 text-center'>
              <img src={dalmacija}></img>
              <p className="uppercase font-menu text-menu-text text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="dalmacija">Plata sira s pršutom</Trans> <span className="font-semibold">"Dalmacija"</span></p>
            </Card>
          </div>
          <div className="flex flex-col lg:flex-row justify-around items-center">
            <Card className='flex flex-col items-center justify-around w-full lg:w-1/2 px-12 text-center'>
              <img src={meat}></img>
              <p className="uppercase font-menu text-menu-text text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="plata">Plata carpaccio</Trans> <span className="font-semibold"><Trans i18nKey="meso">- meso -</Trans></span></p>
            </Card>
            <Card className='flex flex-col items-center justify-around w-full lg:w-1/2 px-12 text-center'>
              <img src={fish}></img>
              <p className="uppercase font-menu text-menu-text text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="plata">Plata carpaccio</Trans> <span className="font-semibold"><Trans i18nKey="riba">- riba -</Trans></span></p>
            </Card>
          </div>
          <div className="flex flex-col lg:flex-row justify-around items-center">
            <Card className='flex flex-col items-center justify-around w-full lg:w-1/2 px-12 text-center'>
              <img src={tartuf}></img>
              <p className="uppercase font-menu text-menu-text text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="plata">Plata</Trans> <span className="font-semibold">"<Trans i18nKey="tartuf">tartuf</Trans>"</span></p>
            </Card>
            <Card className='flex flex-col items-center justify-around w-full lg:w-1/2 px-12 text-center'>
              <img src={shells}></img>
              <p className="uppercase font-menu text-menu-text text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="plata">Plata</Trans> <span className="font-semibold">"<Trans i18nKey="skoljke">školjke</Trans>"</span></p>
            </Card>
          </div>
          <div className="flex flex-col justify-around pt-2 lg:pt-6">
          </div>
          <div className="flex flex-col lg:flex-row justify-around items-center pb-12 lg:pb-20">
            <Card className='flex flex-col lg:flex-row items-center justify-between w-full px-12 text-center'>
              <img src={kamenice} className="lg:w-1/2"></img>
              <p className="uppercase font-menu text-menu-text text-sm pt-2 lg:text-xl lg:pt-3 lg:pr-32"><span className="font-semibold"><Trans i18nKey="kamenice">Kamenice</Trans> <br></br>6 € / pc (45,20kn)</span></p>
            </Card>
          </div>
        </section>

        <section className="px-10 md:px-32 lg:py-12 relative">
          <div className="border-y border-menu-text">
              <h1 className="uppercase font-500 text-xl lg:text-3xl text-center py-4 lg:py-8"><Trans i18nKey="omleti">omleti</Trans></h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-around items-center pt-8 pb-12 lg:py-20">
            <Card className='flex flex-col items-center justify-around w-full lg:w-1/2 px-12 text-center'>
              <img src={omelettea}></img>
              <p className="uppercase font-menu text-menu-text text-sm pt-2 lg:text-xl lg:pt-3 font-semibold"><Trans i18nKey="sparoge">Omlet sa šparogama</Trans> <br></br> 15 €  (113,02 kn)</p>
            </Card>
            <Card className='flex flex-col items-center justify-around w-full lg:w-1/2 px-12 text-center'>
              <img src={omeletteo}></img>
              <p className="uppercase font-menu text-menu-text text-sm pt-2 lg:text-xl lg:pt-3 font-semibold"><Trans i18nKey="hoba">Omlet s hobotnicom</Trans> <br></br> 20 €  (150,69 kn)</p>
            </Card>
          </div>
        </section>
       
        <section className="px-10 md:px-32 lg:py-12 relative">
          <div className="border-y border-menu-text">
              <h1 className="uppercase font-500 text-xl lg:text-3xl text-center py-4 lg:py-8"><Trans i18nKey="rostilj-meso">meso s roštilja</Trans></h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-around items-center py-12">
            <Card className='flex flex-col items-center justify-around w-full lg:w-1/3 px-12 text-center'>
              <img src={beef}></img>
              <p className="uppercase font-menu text-menu-text text-sm pt-2 lg:text-xl lg:pt-3 font-semibold"><Trans i18nKey="biftek">Odležani biftek</Trans> <br></br> 140 € / kg (1045,83 kn)</p>
            </Card>
            <Card className='flex flex-col items-center justify-around w-full lg:w-1/3 px-12 text-center lg:pt-48'>
              <img src={rump}></img>
              <p className="uppercase font-menu text-menu-text text-sm pt-2 lg:text-xl lg:pt-3 font-semibold"><Trans i18nKey="rumpsteak">Odležani rumpsteak</Trans> <br></br> 100 € / kg (753,45 kn)</p>
            </Card>
            <Card className='flex flex-col items-center justify-around w-full lg:w-1/3 px-12 text-center'>
              <img src={lamb}></img>
              <p className="uppercase font-menu text-menu-text text-sm pt-2 lg:text-xl lg:pt-3 font-semibold"><Trans i18nKey="janjetina">Janjetina</Trans> <br></br> 80 € / (602,76 kn)</p>
            </Card>
          </div>
        </section>

        <section className="px-10 md:px-32 lg:py-12 relative">
          <div className="border-y border-menu-text">
              <h1 className="uppercase font-500 text-xl lg:text-3xl text-center py-4 lg:py-8"><Trans i18nKey="rostilj-riba">riba s roštilja</Trans></h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-around items-center py-12 lg:pt-16">
            <Card className='flex flex-col items-center justify-around w-full lg:w-1/3 px-12 text-center'>
              <img src={seabream}></img>
              <p className="uppercase font-menu text-menu-text text-sm pt-2 lg:text-xl lg:pt-3 font-semibold"><Trans i18nKey="orada">Orada</Trans> <br></br> 75 € / kg (545,09 kn)</p>
            </Card>
            <Card className='flex flex-col items-center justify-around w-full lg:w-1/3 px-12 text-center lg:pb-48'>
              <img src={tuna}></img>
              <p className="uppercase font-menu text-menu-text text-sm pt-2 lg:text-xl lg:pt-3 font-semibold"><Trans i18nKey="tuna">tuna</Trans> <br></br> 100 € / kg (753,45 kn)</p>
            </Card>
            <Card className='flex flex-col items-center justify-around w-full lg:w-1/3 px-12 text-center'>
              <img src={seabass}></img>
              <p className="uppercase font-menu text-menu-text text-sm pt-2 lg:text-xl lg:pt-3 font-semibold"><Trans i18nKey="brancin">Brancin</Trans> <br></br> 75 € / (545,09 kn)</p>
            </Card>
          </div>
        </section>

        <section className="px-10 md:px-32 lg:py-12 relative">
          <div className="border-y border-menu-text">
              <h1 className="uppercase font-500 text-xl lg:text-3xl text-center py-4 lg:py-8">Lešada <Trans i18nKey="lesada">s grdobinom, škampima i školjkama</Trans></h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-around items-center py-12 lg:pt-16">
            <Card className='flex flex-col lg:flex-row items-center justify-between w-full px-12 text-center'>
              <img src={lesada} className="lg:w-1/2"></img>
              <div className="flex flex-col justify-around pt-2 lg:pt-6 w-full">
                <div className="flex flex-row justify-around items-center font-menu text-menu-text">
                  <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="small">small</Trans></p>
                  <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">60 € / kg  (452,07 kn)</p>
                </div>
                <div className="flex flex-row justify-around items-center lg:pt-6 font-menu text-menu-text">
                  <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="velika">large</Trans></p>
                  <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">110 € / kg  (828,80 kn)</p>
                </div>
              </div>   
            </Card>
          </div>
        </section>


        <section className="px-10 md:px-32 lg:py-12 relative">
          <div className="border-y border-menu-text">
              <h1 className="uppercase font-500 text-xl lg:text-3xl text-center py-4 lg:py-8"><Trans i18nKey="desert">desert</Trans></h1>
          </div>
          <div className="flex flex-col justify-around items-center py-12 lg:pt-16">
            <Card className='flex flex-col lg:flex-row items-center justify-between w-full px-12 text-center'>
              <img src={fig} className="lg:w-1/2"></img>
              <p className="uppercase font-menu text-menu-text text-sm pt-2 lg:text-xl lg:pt-3 lg:pr-32"><span className="font-semibold"><Trans i18nKey="fig">smokvenjak</Trans> <br></br>10 € (75,35kn)</span></p>
            </Card>
            <Card className='flex flex-col lg:flex-row-reverse items-center justify-between w-full px-12 text-center'>
              <img src={pancakes} className="lg:w-1/2"></img>
              <p className="uppercase font-menu text-menu-text text-sm pt-2 lg:text-xl lg:pt-3 lg:pr-32"><span className="font-semibold"><Trans i18nKey="palacinke">palačinke s domaćim džemom</Trans> <br></br>10 € (75,35kn)</span></p>
            </Card>
          </div>
        </section>

        <section className="px-10 md:px-32 lg:py-12 relative">
          <div className="border-y border-menu-text">
              <h1 className="uppercase font-500 text-xl lg:text-3xl text-center py-4 lg:py-8"><Trans i18nKey="prilozi">prilozi</Trans></h1>
          </div>
          <div className="flex flex-col justify-around py-12 lg:py-20">
            <div className="flex flex-row justify-between items-baseline">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="salata1">salata: rajčica i paprika</Trans></p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">5 € (37,67 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-baseline lg:pt-6">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="salata2">salata: rajčica</Trans></p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">5 € (37,67 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-baseline lg:pt-6">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="salata3">salata: paprika</Trans></p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">5 € (37,67 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-baseline lg:pt-6">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="dresing1">preljev: češnjak, peršin i maslinovo ulje</Trans></p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">5 € (37,67 kn)</p>
            </div><div className="flex flex-row justify-between items-baseline lg:pt-6">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="dresing2">preljev: češnjak i maslinovo ulje</Trans></p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">5 € (37,67 kn)</p>
            </div><div className="flex flex-row justify-between items-baseline lg:pt-6">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="dresing3">preljev: peršin i maslinovo ulje</Trans></p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">5 € (37,67 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-baseline lg:pt-6">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="povrce">povrće na žaru: rajčica, paprika i tikvica</Trans></p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">10 € (75,35 kn)</p>
            </div>
          </div>
        </section>

        <section className="px-10 lg:px-20 xl:px-32 py-12 lg:pt-20 2xl:pt-52">
          <img src={drinks} className=""  />
        </section>


        <section className="px-10 md:px-32 lg:py-12 relative">
          <div className="border-y border-menu-text">
              <h1 className="uppercase font-500 text-xl lg:text-3xl text-center py-4 lg:py-8"><Trans i18nKey="bvina">bijela vina</Trans></h1>
          </div>
          <div className="flex flex-col justify-around py-12 lg:py-20">
            <div className="flex flex-row justify-between items-center">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="stolno">stolno vino</Trans> 0,2 l</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">4 € (30,13 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="stolno">stolno vino</Trans> 0,5 l</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">8 € (60,53 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="stolno">stolno vino</Trans> 1 l</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">13 € (97,94 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center pt-6 lg:pt-10">
              <p className="uppercase font-thin text-sm pt-4 lg:text-xl lg:pt-6">rajnski rizling</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">20 € (150,69 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center pt-6 lg:pt-10">
              <p className="uppercase font-thin text-sm pt-4 lg:text-xl lg:pt-6">sauvignon galić</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">40 € (301,38 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="casa">čaša vina</Trans> 0,1 l</p>
              <p className="uppercase font-semibold text-sm lg:text-xl">8 € (60,53 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center pt-6 lg:pt-10">
              <p className="uppercase font-thin text-sm pt-4 lg:text-xl lg:pt-6">pinot gris, krauthaker</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">40 € (301,38 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="casa">čaša vina</Trans> 0,1 l</p>
              <p className="uppercase font-semibold text-sm lg:text-xl">8 € (60,53 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center pt-6 lg:pt-10">
              <p className="uppercase font-thin text-sm pt-4 lg:text-xl lg:pt-6">malvazija alba, matošević</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">40 € (301,38 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="casa">čaša vina</Trans> 0,1 l</p>
              <p className="uppercase font-semibold text-sm lg:text-xl">8 € (60,53 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center pt-6 lg:pt-10">
              <p className="uppercase font-thin text-sm pt-4 lg:text-xl lg:pt-6">graševina - mitrovac, krauthaker</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">40 € (301,38 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="casa">čaša vina</Trans> 0,1 l</p>
              <p className="uppercase font-semibold text-sm lg:text-xl">8 € (60,53 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center pt-6 lg:pt-10">
              <p className="uppercase font-thin text-sm pt-4 lg:text-xl lg:pt-6">graševina - <Trans i18nKey="gras">kasna berba</Trans></p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">50 € (376,72 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="casa">čaša vina</Trans> 0,1 l</p>
              <p className="uppercase font-semibold text-sm lg:text-xl">9 € (67,81 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center pt-6 lg:pt-10">
              <p className="uppercase font-thin text-sm pt-4 lg:text-xl lg:pt-6">chardonnay - rosenberg, krauthaker</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">60 € (376,72 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="casa">čaša vina</Trans> 0,1 l</p>
              <p className="uppercase font-semibold text-sm lg:text-xl">11 € (82,97 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center pt-6 lg:pt-10">
              <p className="uppercase font-thin text-sm pt-4 lg:text-xl lg:pt-6"><Trans i18nKey="pjenusavo">pjenušavo vino</Trans></p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">100 € (753,45 kn)</p>
            </div>
          </div>
        </section>

        <section className="px-10 md:px-32 lg:py-12 relative">
          <div className="border-y border-menu-text">
              <h1 className="uppercase font-500 text-xl lg:text-3xl text-center py-4 lg:py-8"><Trans i18nKey="cvina">crna vina</Trans></h1>
          </div>
          <div className="flex flex-col justify-around py-12 lg:py-20">
            <div className="flex flex-row justify-between items-center">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="stolno">stolno vino</Trans> 0,2 l</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">4 € (30,13 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="stolno">stolno vino</Trans> 0,5 l</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">8 € (60,53 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="stolno">stolno vino</Trans> 1 l</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">13 € (97,94 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center pt-6 lg:pt-10">
              <p className="uppercase font-thin text-sm pt-4 lg:text-xl lg:pt-6">zlatan plavac - barrique</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">60 € (376,72 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="casa">čaša vina</Trans> 0,1 l</p>
              <p className="uppercase font-semibold text-sm lg:text-xl">11 € (82,97 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center pt-6 lg:pt-10">
              <p className="uppercase font-thin text-sm pt-4 lg:text-xl lg:pt-6">dingač - <Trans i18nKey="rezerva">rezerva</Trans> barrique</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">85 € (640,43 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="casa">čaša vina</Trans> 0,1 l</p>
              <p className="uppercase font-semibold text-sm lg:text-xl">14 € (105,48 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center pt-6 lg:pt-10">
              <p className="uppercase font-thin text-sm pt-4 lg:text-xl lg:pt-6">rosé galić</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">40 € (301,38 kn)</p>
            </div>
          </div>
        </section>

        <section className="px-10 md:px-32 lg:py-12 relative">
          <div className="border-y border-menu-text">
              <h1 className="uppercase font-500 text-xl lg:text-3xl text-center py-4 lg:py-8"><Trans i18nKey="alkohol">druga alkoholna pića</Trans></h1>
          </div>
          <div className="flex flex-col justify-around py-12 lg:py-20">
            <div className="flex flex-row justify-between items-center">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="djumbir">đumbir koktel</Trans> 0,3 l</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">10 € (75,35 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center lg:pt-6">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="piva">piva</Trans> zlatni medo 0,5 l</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">5 € (37,67 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center lg:pt-6">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3">prošek 0,1 l</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">5 € (37,67 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center lg:pt-6">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="rakija">rakija</Trans> 0,03 l</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">4 € (30,14 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center lg:pt-6">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="liker">liker</Trans> 0,03 l</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">4 € (30,14 kn)</p>
            </div>
          </div>
        </section>

        <section className="px-10 md:px-32 lg:py-12 relative">
          <div className="border-y border-menu-text">
              <h1 className="uppercase font-500 text-xl lg:text-3xl text-center py-4 lg:py-8"><Trans i18nKey="topli">topli napitci</Trans></h1>
          </div>
          <div className="flex flex-col justify-around py-12 lg:py-20">
            <div className="flex flex-row justify-between items-center">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="kava">turska kava</Trans></p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">3 € (22,60 kn)</p>
            </div>
          </div>
        </section>

        <section className="px-10 md:px-32 lg:py-12 relative">
          <div className="border-y border-menu-text">
              <h1 className="uppercase font-500 text-xl lg:text-3xl text-center py-4 lg:py-8"><Trans i18nKey="voda">voda</Trans></h1>
          </div>
          <div className="flex flex-col justify-around py-12 lg:py-20">
            <div className="flex flex-row justify-between items-center">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="gaz">gazirana voda</Trans> 1 l</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">6 € (45,21 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="obicna">obična voda</Trans> 1 l</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">6 € (45,21 kn)</p>
            </div>
          </div>
        </section>

        <section className="px-10 md:px-32 lg:py-12 relative">
          <div className="border-y border-menu-text">
              <h1 className="uppercase font-500 text-xl lg:text-3xl text-center py-4 lg:py-8"><Trans i18nKey="sok">domaći sokovi</Trans></h1>
          </div>
          <div className="flex flex-col justify-around py-12 lg:py-20">
            <div className="flex flex-row justify-between items-center">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="vis">višnja</Trans> 0,25 l</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">4 € (30,14 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center lg:pt-6">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="bor">borovnica</Trans> 0,25 l</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">4 € (30,14 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center lg:pt-6">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="mal">malina</Trans> 0,25 l</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">4 € (30,14 kn)</p>
            </div>
            <div className="flex flex-row justify-between items-center lg:pt-6">
              <p className="uppercase font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="sv">šumsko voće</Trans> 0,25 l</p>
              <p className="uppercase font-semibold text-sm pt-2 lg:text-xl lg:pt-3">4 € (30,14 kn)</p>
            </div>
          </div>
        </section>
        
        <section className="px-10 md:px-32 lg:py-12 relative">
          <div className="border-y border-menu-text">
              <h1 className="uppercase font-500 text-xl lg:text-3xl text-center py-4 lg:py-8">mocktails</h1>
          </div>
          <div className="relative flex flex-row justify-between">
            
            <img src={drink} className="w-44 absolute bottom-0 -left-12 h-44 lg:relative lg:h-auto lg:w-1/2 lg:-ml-36 xl:-ml-52 lg:mt-12" />
         
            <div className="flex flex-col relative justify-around pt-10 pb-52 items-start text-left lg:py-24">
              <p className="uppercase text-left font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="limun">limun</Trans> 0,25 l</p>
              <p className="uppercase text-left font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="mal">malina</Trans> 0,25 l</p>
              <p className="uppercase text-left font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="bor">borovnica</Trans> 0,25 l</p>
              <p className="uppercase text-left font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="sv">šumsko voće</Trans> 0,25 l</p>
              <p className="uppercase text-left font-thin text-sm pt-2 lg:text-xl lg:pt-3"><Trans i18nKey="vis">višnja</Trans> 0,25 l</p>
            </div>
            <div className="flex flex-col justify-around pt-10 pb-52 items-center text-right lg:py-24">
              <p className="uppercase text-right font-semibold text-sm pt-2 lg:text-xl lg:pt-3">8 € (60,28 kn)</p>
              <p className="uppercase text-right font-semibold text-sm pt-2 lg:text-xl lg:pt-3">6 € (45,21 kn)</p>
              <p className="uppercase text-right font-semibold text-sm pt-2 lg:text-xl lg:pt-3">6 € (45,21 kn)</p>
              <p className="uppercase text-right font-semibold text-sm pt-2 lg:text-xl lg:pt-3">6 € (45,21 kn)</p>
              <p className="uppercase text-right font-semibold text-sm pt-2 lg:text-xl lg:pt-3">6 € (45,21 kn)</p>
            </div>
          </div>
         <div className="pb-12 text-center">
          <p className="font-cursive text-lg lg:text-3xl">Made with Love</p>
         </div>
        </section>

      </main>
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