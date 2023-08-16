import React from 'react'

const Button = ({styles}) => 
  (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-white outline-none ${styles} rounded-[10px]`}>
      Learn More
    </button>
  )


export default Button