import React from 'react'

const TitleHeader = ({children}) => {
    var curretPath = window.location.pathname.replace('/', '')
    var location = curretPath.replaceAll('/', ' > ')
    // poner en mayusculas la primera letra de cada palabra
    location = location.split('>').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' > ')
    return (
        <>
            <div className='flex items-center justify-between mb-2'>
                <h1 className='text-3xl'>Productos</h1>
                <p className='font-bold text-md'>{location}</p>
            </div>
            <div className='w-full bg-white border border-gray-200 shadow-sm sm:p-8 dark:bg-gray-950 dark:border-gray-700'>
                <div className='flex justify-between gap-2'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default TitleHeader