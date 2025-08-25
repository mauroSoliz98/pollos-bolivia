import React from 'react'
import { RiCloseLine } from 'react-icons/ri'

const Card = ({title, children, closeCard}) => {
    return (
        <div className="inline-block align-bottom bg-white dark:bg-gray-950 relative z-10 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="p-6">
                <div className="flex justify-end">
                    <button
                        onClick={closeCard}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-white"
                    >
                        <RiCloseLine size={20} />
                    </button>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>

                {children}
            </div>
        </div>
    )
}

export default Card