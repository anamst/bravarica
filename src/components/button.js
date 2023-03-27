import * as React from "react"

const sizes = {
    default: `py-2 px-6`,
    lg: `py-3 px-8`,
    xl: `py-4 px-12 text-xl`
  };
  
  const Button = ({ children, className = '', size }) => {
    return (
      <button
        type="button"
        className={`
          ${sizes[size] || sizes.default}
          ${className}
          bg-cover pt-10 pb-6 pr-12 pl-6 bg-no-repeat bg-[url('../images/btnbg.png')]
           transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-headlines
          text-gray uppercase text-lg font-naslovi
      `}
      >
        {children}
      </button>
    );
  };
  
  export default Button