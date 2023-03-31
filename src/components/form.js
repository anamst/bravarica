import * as React from "react"
import { useState } from "react";
import debela from '../images/debela.png'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import { navigate } from 'gatsby-link'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';




const Form = () => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinute] = useState(Math.floor(new Date().getMinutes() / 30) * 30);
  const [people, setPeople] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleHourChange = (e) => {
    setHour(parseInt(e.target.value));
  }

  const handleMinuteChange = (e) => {
    setMinute(parseInt(e.target.value));
  }

  const options = [];
  for (let h = 14; h < 22; h++) {
    for (let m = 0; m < 60; m += 30) {
      const time = ("0" + h).slice(-2) + ":" + ("0" + m).slice(-2);
      options.push(<option key={time} value={h + ":" + m}>{time}</option>);
    }
  }

  const handleDateChange = (date) => {
    if (date > new Date()) {
      setDate(date);
    } else {
      alert('Selected date cannot be in the past');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const myForm = e.target;
    
    const formData = new FormData(myForm);
      fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
      })
      .then(() => navigate(`/resto`))
      .catch((error) => alert(error));
      
      if (!name || !email || !people || !mobile ) {
        alert('Please fill in all required fields');
      return;
    }
    
  };

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
              <input type="hidden" name="date" value={date} />
              <DatePicker
                name="date"
                value={date}
                onChange={handleDateChange}
                minDate={new Date()}
                closeOnSelect={true}
                shouldCloseOnSelect={true}
                className="w-full block px-12 md:px-6 lg:px-8 py-2 mt-2 border md:mr-2 bg-light focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
              />
              </label>
            </div>
            <div className="mb-2">
              <label className="block mb-8"> {t("form_time")}
              <select
                name="time"
                value={hour + ":" + minute} onChange={handleHourChange} 
                  className="w-full block px-20 md:px-14 lg:px-20 py-2 mt-2 md:ml-1 border bg-light focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50">
                    {options}
            </select>
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