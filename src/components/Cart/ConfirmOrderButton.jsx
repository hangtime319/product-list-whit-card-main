import React from 'react'

const ConfirmOrderButton = ({onClick}) => {
  return (
    <button className="cursor-pointer mt-4 w-full bg-(--color-red) hover:bg-red-800 transition-colors duration-200 text-white py-3 rounded-full" onClick={onClick}>Confirm Order</button>
  )
}

export default ConfirmOrderButton;