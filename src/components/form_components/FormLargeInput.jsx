import React from 'react'

const FormLargeInput = ({ label, ...props }) => {
    return (
        <div>
            <label htmlFor="large-input" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <textarea className="w-full p-4 rounded-md border-1 border-stone-300 dark:border-stone-600" />
        </div>
    )
}

export default FormLargeInput