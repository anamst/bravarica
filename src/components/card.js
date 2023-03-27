import * as React from "react"

const Card = ({ className, children }) => (
    <div
    className={`p-12 
      text-gray text-lg
      shadow-none
      max-w-max
      ${className}`}
      
    >
      {children}
    </div>
  );
  
  export default Card;