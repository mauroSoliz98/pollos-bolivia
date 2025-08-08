import React from 'react'
import { RiAddLine } from 'react-icons/ri'

export const AddButton = ({label, ...props}) => {
  return (
    <button {...props} className='flex items-center gap-2 bg-primary hover:bg-red-700 text-white font-bold py-2 px-2 rounded'>
        <RiAddLine size={20}/> {label}
    </button>
  )
}
