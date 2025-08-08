import React from 'react'
import { AddButton } from '../../../components/AddButton'
import {RiLoopLeftFill, 
        RiDeleteBin6Line, 
        RiEditLine,
        RiDownloadLine} from 'react-icons/ri'
import { MyButton } from '../../../components/MyButton'

export const Products = () => {
  var curretPath = window.location.pathname.replace('/', '')
  var location = curretPath.replaceAll('/', ' > ')
  // poner en mayusculas la primera letra de cada palabra
  location = location.split('>').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' > ')
  
  
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl'>Productos</h1>
        <p className='font-bold text-md'>{location}</p>
      </div>
      <div className='w-full bg-white border border-gray-200 shadow-sm sm:p-8 dark:bg-gray-950 dark:border-gray-700'>
        <div className='flex justify-between gap-2'>
          <div className='flex items-center gap-2'>
            <AddButton label={"Nuevo producto"}/>
            <MyButton><RiLoopLeftFill size={20}/></MyButton>
            <MyButton><RiEditLine size={20}/></MyButton>
            <MyButton><RiDeleteBin6Line size={20}/></MyButton>
          </div>
          <div>
            <MyButton><RiDownloadLine size={20}/></MyButton>
          </div>
        </div>
      </div>
    </div>
  )
}
