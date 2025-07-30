import React from 'react'

const LoginInput = ({label, ...props}) => {
    return (
        <div className='flex flex-col gap-1'>
            <label className='font-medium text-stone-700' >{label}</label>
            <input className='h-10 rounded-md shadow-lg p-2 border-1 border-stone-300 dark:shadow-gray-800/50 dark:border-stone-600' {...props} />
        </div>
    )
}

export default LoginInput