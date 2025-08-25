import React from 'react'

const FormSelect = ({label, children, ...props}) => {
    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <select {...props} className="w-full p-2.5 rounded-md border-1 border-stone-300 dark:bg-gray-950 dark:border-stone-600">
                {children}
            </select>
        </div>
    )
}

export default FormSelect