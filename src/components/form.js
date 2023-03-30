import * as React from "react"
import { useState } from "react";
import debela from '../images/debela.png'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import { navigate } from 'gatsby-link'
import Calendar from "./datePicker.js";
import TimePicker from "./timePicker.js";




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


    const myForm = e.target;
    const formData = new FormData(myForm);
      fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
      })
      .then(() => navigate(-1))
      .catch((error) => alert(error));
      
      if (!name || !email || !date || !time || !people || !mobile ) {
        alert('Please fill in all required fields');
      return;
    }
    
  };

  if (submitted) {
    return (
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
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
          name="forma"
          target="_blank"
           className="mt-6">
          <input type="hidden" name="form-name" value="forma" />

            <div className="mb-2">
              <label className="block mb-8"> {t("form_imeprezime")}
                <input
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className=" w-full block px-16 py-2 mt-2 border bg-light focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
                  required
                />
              </label>
            </div>
            <div className="mb-2">
              <label className="block mb-8">{t("form_email")}
                <input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full block px-16 py-2 mt-2 border bg-light focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
                  required
                />
              </label>
            </div>
            <div className="flex flex-col md:flex-row justify around items-center">
            <div className="mb-2">
              <label className="block mb-8"> {t("form_date")}
                <Calendar
                  selected={date}
                  onChange={(newDate) => setDate(newDate)}
                  closeOnSelect={true}
                  shouldCloseOnSelect={true}
                  className="w-full block px-16 py-2 mt-2 border bg-light focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
                  required
                />
              </label>
            </div>
            <div className="mb-2">
              <label className="block mb-8"> {t("form_time")}
                <TimePicker
                  name="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full block px-16 py-2 mt-2 border bg-light focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
                  required
                />
              </label>
            </div>
            </div>
            <div className="flex flex-col md:flex-row justify around items-center">
            <div className="mb-2">
              <label className="block mb-8"> {t("form_nr")}
                <input
                  name="people"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  className="w-full block px-14 py-2 mt-2 md:mr-2 border bg-light focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
                  required
                />
              </label>
            </div>
            <div className="mb-2">
              <label className="block mb-8"> {t("form_mobile")}
                <input
                  name="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full block px-20 py-2 mt-2 md:ml-1 border bg-light focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
                  required
                />
              </label>
            </div>
            </div>
            <div className="mb-2">
              <label className="block mb-8">
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="block w-full mt-2 px-16 py-8 border bg-light focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows="5"
                ></textarea>
              </label>
            </div>
  
            <div className="mb-6 grid grid-cols-1 place-content-center">
              <button type="submit" className="mx-auto bg-cover pt-10 pb-6 pr-12 pl-6 bg-no-repeat bg-[url('../images/btnbg.png')]
           transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-headlines
          text-gray uppercase text-lg font-naslovi"><Trans i18nKey="form_rezervirajte">rezervirajte</Trans></button>
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