import React from 'react'

const FormInput = ({label, ...props}) => {
    return (
        <div className='flex flex-col gap-1'>
            <label className='mb-2 text-sm font-medium text-gray-900 dark:text-white' >{label}</label>
            <input className='h-10 rounded-md  p-2 border-1 border-stone-300 dark:border-stone-600' {...props} />
        </div>
    )
}

export default FormInput