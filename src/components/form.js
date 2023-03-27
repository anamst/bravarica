import * as React from "react"
import { useState } from "react";
import Button from "./button.js"
import debela from '../images/debela.png'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';


const Form = () => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !date || !time || !people || !mobile ) {
      alert('Please fill in all required fields');
      return;
    }
    
    setTimeout(() => {
      setSubmitted(true);
    }, 100 );
  };

  if (submitted) {
    return (
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
        <h1 className="text-3xl text-center uppercase">
         <Trans i18nKey="form_success">Hvala Vam na povjerenju. Javit ćemo Vam se uskoro s potvrdom.</Trans> 
        </h1>
      </div>
    );
  }
    return (
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
        <div className="w-full p-6 m-auto bg-light lg:max-w-xl">
        <h1 className="text-3xl text-center uppercase">
        <Trans i18nKey="form_title">kontaktirajte nas</Trans>
        </h1>
        <img src={debela} className="w-80 pb-8 mx-auto" />
          <form
          onSubmit={handleSubmit}
          method="post"
          data-netlify="true"
          target="_blank"
           className="mt-6">
            <div className="mb-2">
              <label> {t("form_imeprezime")}
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
                  required
                />
              </label>
            </div>
            <div className="mb-2">
              <label>{t("form_email")}
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
                  required
                />
              </label>
            </div>
            <div className="flex flex-row justify around items-center">
            <div className="mb-2">
              <label> {t("form_date")}
                <input
                  name="date"
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
                  required
                />
              </label>
            </div>
            <div className="mb-2">
              <label> {t("form_time")}
                <input
                  name="time"
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
                  required
                />
              </label>
            </div>
            </div>
            <div className="flex flex-row justify around items-center">
            <div className="mb-2">
              <label> {t("form_nr")}
                <input
                  name="people"
                  type="text"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  className="w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
                  required
                />
              </label>
            </div>
            <div className="mb-2">
              <label> {t("form_mobile")}
                <input
                  name="mobile"
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
                  required
                />
              </label>
            </div>
            </div>
            <div className="mb-2">
              <label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="block w-full mt-2 px-16 py-8 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows="5"
                ></textarea>
              </label>
            </div>
  
            <div class="mb-6 grid grid-cols-1 place-content-center">
              <Button type="submit" className="mx-auto"><Trans i18nKey="form_rezervirajte">rezervirajte</Trans></Button>
            </div>
           
          </form>
        </div>
      </div>
    );
  };

export default Form;

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