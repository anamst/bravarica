import * as React from "react"

const Card = ({ className, children }) => (
    <div
    className={`py-12
      text-gray text-lg
      max-w-max
      ${className}`}
      
    >
      {children}
    </div>
  );
  
  export default Card;