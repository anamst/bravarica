import * as React from 'react'
import {useState} from 'react'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import {Link, useI18next} from 'gatsby-plugin-react-i18next';


const Header = () => {
    const {languages, originalPath, i18n} = useI18next();
    const [isExpanded, toggleExpansion] = useState(false)
  
    const handleButtonClick = () => {
      toggleExpansion(!isExpanded);
    };
  return (
    <nav className="flex py-0 fixed z-10 top-0 w-full items-center justify-between flex-wrap bg-header-light px-10 lg:px-20 xl:px-32 lg:py-4 font-naslovi">
      <Link to={`/`} className='text-normal lg:text-xl uppercase'>Bravarica</Link> 
      <div className="block md:hidden w-10">
        <button onClick={() => toggleExpansion(!isExpanded)} className="text-normal">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 77 120" width="52" height="52" className='mt-10'>
  <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" fill="#000"/>

                  {!isExpanded ? (
                    <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
                  ) : (
                    <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
                  )}
                
            </svg>        
        </button>
      </div>
      <div className={`${ isExpanded ? `flex` : `hidden` }  w-full md:flex items-center justify-center md:w-auto py-4`}>
        <div className="block md:flex">
          <Link to={`/`} className="block uppercase text-xl mt-6 md:inline-block md:mt-0 text-normal transition-all duration-500 md:mr-4 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-normal
                before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                before:transition before:ease-in-out before:duration-300">
                  <Trans i18nKey="header_home">
            Naslovnica </Trans>
          </Link>
          <Link to={`/resto`} className="block uppercase text-xl mt-4 md:inline-block md:mt-0 text-normal transition-all duration-500 md:mr-4 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-normal
                before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                before:transition before:ease-in-out before:duration-300">
                  <Trans i18nKey="header_resto">
            Restoran</Trans>
          </Link>
          <Link to={`/appartments`} className="block uppercase text-xl mt-4 md:inline-block md:mt-0 text-normal transition-all duration-500 md:mr-4 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-normal
                before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                before:transition before:ease-in-out before:duration-300">
                  <Trans i18nKey="header_app">
            Apartmani</Trans>
          </Link>
          <Link to={`/about`} className="block uppercase text-xl mt-4 md:inline-block md:mt-0 text-normal transition-all duration-500 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-normal
                before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                before:transition before:ease-in-out before:duration-300 pb-0">
                  <Trans i18nKey="header_about">
            O nama</Trans>
          </Link>
          <ul className="md:pl-4 pt-20 md:pt-1 inline uppercase ">
            {languages.map((lng) => (
              <li className='inline pr-2 pt-12' key={lng}>
               <Link to={originalPath} language={lng} style={{ textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none' }}>
                {lng}
              </Link>
            </li>
            ))}
         </ul>
        </div>
      </div>
    </nav>
    
  )
}

export default Header

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
