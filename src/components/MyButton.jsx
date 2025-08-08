import React from 'react'

export const MyButton = ({children}) => {
  return (
    <button className='bg-stone-100 hover:bg-stone-300 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-900 font-bold p-2 rounded'>
      {children}
    </button>
  )
}
