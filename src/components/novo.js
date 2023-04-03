import React, { useState } from "react";
import debela from '../images/debela.png'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { navigate } from "gatsby-link";

const FormNew = () => {
    const { t } = useTranslation();

  const [state, setState] = useState({});
  const [errors, setErrors] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!state.name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!state.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!state.date) {
      errors.date = "Date is required";
      isValid = false;
    } else if (state.date < new Date()) {
        errors.date = "Selected date cannot be in the past";
        isValid = false;
    }

    if (!state.time) {
      errors.time = "Time is required";
      isValid = false;
    }

    if (!state.people) {
        errors.people = "Number of guests is required";
        isValid = false;
    }

    if (!state.mobile) {
        errors.mobile = "Mobile phone required";
        isValid = false;
    }


    setErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  }; 

  const handleTimeChange = (e) => {
    setState({ ...state, time: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    if (validateForm()) {
        const myForm = e.target;
    
        const formData = new FormData(myForm);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": formData.getAttribute("name"),
          ...state,
        }),
      })
        .then(() => navigate(`/resto`))
        .catch((error) => alert(error));
    }
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 14; hour < 22; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        options.push(time);
      }
    }
    return options;
  };

  const timeOptions = generateTimeOptions();

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
            className="mt-6">
          <input type="hidden" name="form-name" value="forma" />
          <div className="mb-2">
              <label className="block mb-8" htmlFor="name"> {t("form_imeprezime")}
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={state.name || ""}
                  onChange={handleChange}
                  className="w-full block px-16 py-2 mt-2 border bg-light focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
                />
              </label>
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="mb-2">
              <label className="block mb-8" htmlFor="email">{t("form_email")}
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={state.email || ""}
                  onChange={handleChange}
                  className="w-full block px-16 py-2 mt-2 border bg-light focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
                />
              </label>
              {errors.email && <span className="error">{errors.email }</span>}
            </div>
            <div className="flex flex-col md:flex-row justify around items-center">
            <div className="mb-2">
              <label htmlFor="date" className="block mb-8"> {t("form_date")}
              <input type="hidden" name="date" value={selectedDate} />
                <DatePicker
                  id="date"
                  name="date"
                  selected={selectedDate}
                onChange={handleDateChange}
                minDate={new Date()}
                  dateFormat="dd.MM.yyyy"
                  className="w-full block px-12 md:px-6 lg:px-8 py-2 mt-2 border md:mr-2 bg-light focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
                />
              </label> 
            </div>
            <div className="mb-2">
              <label htmlFor="time" className="block mb-8"> {t("form_time")}
              <input type="hidden" name="time" value={timeOptions} />
              <select
                id="time"
                name="time"
                value={state.time || ""}
                onChange={handleTimeChange} 
                  className="w-full block px-20 md:px-14 lg:px-20 py-2 mt-2 md:ml-1 border bg-light focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50">
                    <option value=""></option>
                        {timeOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
              </select>
              </label>
              {errors.time && <span className="error">{errors.time}</span>}
            </div>
            </div>
            <div className="flex flex-col md:flex-row justify around items-center">
            <div className="mb-2">
              <label htmlFor="people" className="block mb-8"> {t("form_nr")}
                <input
                 type="people"
                 id="people"
                 name="people"
                 value={state.people || ""}
                 onChange={handleChange}
                  className="w-full block px-14 py-2 mt-2 md:mr-2 border bg-light focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
                />
              </label>
              {errors.people && <span className="error">{errors.people}</span>}
            </div>
            <div className="mb-2">
              <label className="block mb-8"> {t("form_mobile")}
                <input
                  type="mobile"
                  id="mobile"
                  name="mobile"
                  value={state.mobile || ""}
                  onChange={handleChange}
                  className="w-full block px-20 py-2 mt-2 md:ml-1 border bg-light focus:border-highlight focus:ring focus:ring-highlight focus:ring-opacity-50"
                />
              </label>
              {errors.mobile && <span className="error">{errors.mobile}</span>}
            </div>
            </div>
            <div className="mb-2">
              <label className="block mb-8">
                <textarea
                  type="message"
                  id="message"
                  name="message"
                  value={state.message || ""}
                  onChange={handleChange}
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

export default FormNew;

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
