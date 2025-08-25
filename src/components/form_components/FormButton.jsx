import React from 'react'

const FormButton = ({children, ...props}) => {
    return (
        <div className='flex justify-end mt-4'>
            <button type='button' className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600' {...props}>{children}</button>
        </div>
    )
}

export default FormButton