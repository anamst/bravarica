import * as React from 'react'
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import mail from '../../images/mail.png'
import maps from '../../images/maps.png'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';


const Footer = () => {
    return ( 
        <main className='font-tekst'>
            <div className='w-screen bg-header-light pt-4 px-20 flex flex-col md:flex-row border-bottom justify-between items-center font-text'>
                <div className='flex flex-col md:flex-row justify-around items-start'>
                <p className='text-base text-left text-blue-dark pt-3'><span className='font-bold uppercase font-naslovi'><Trans i18nKey="footer_hours">radno vrijeme: </Trans></span><br /><Trans i18nKey="footer_hrs">Od ponedjeljka do subote 14:00-22:00</Trans></p>
                    <div className='md:px-32 flex flex-col'>
                    <p className='text-base text-blue-dark py-3'>Šonjevi stani 31a, 53291 Novalja</p>
                    <a href='tel:+385 53 881 430' className='text-base font-naslovi text-blue-dark pb-3'>+385 53 881 430</a>
                    <a href='tel:+385 95 511 4567' className='text-base font-naslovi text-blue-dark pb-3'>+385 95 511 4567</a>
                    </div>
                </div>
                <div className='flex flex-row md:flex-col lg:flex-row  justify-end items-center'>
                <a href="https://www.facebook.com/BravaricaPag/" target="_blank">
                    <img src={facebook} alt="Facebook" className='py-2 md:px-2 w-5/6' />
                </a>
                <a href="https://www.instagram.com/bravarica.opg/?hl=en" target="_blank">
                   <img src={instagram} alt="Instagram" className='py-2 md:px-2 w-5/6'/>
                </a>
                <a href="mailto:bravarica.pende@gmail.com" target="_blank">
                   <img src={mail} alt="Mail" className='py-2 md:px-2 w-5/6'/>
                </a>
                <a href="https://www.google.com/maps/place/Bravarica/@44.6247377,14.7963021,17z/data=!3m1!4b1!4m5!3m4!1s0x47624d09abffb17f:0x77767e523988eadd!8m2!3d44.6247086!4d14.7985196" target="_blank">
                   <img src={maps} alt="Location" className='py-2 md:px-2 w-5/6'/>
                </a>
                </div>
                
            </div>
        </main>
    )
}

export default Footer

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common"] }, language: { eq: $language } }
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