import React, { useState } from 'react'
import MiLogo from '../../assets/images/LogoPollosMejorado.png'
import { navbarLinks } from '../../constants'
import { NavLink } from 'react-router'
import { RiArrowRightSLine, RiArrowDownSLine } from 'react-icons/ri'

export const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({})

  const toggleMenu = (name) => {
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name]
    }))
  }

  return (
    <div className='bg-tertiary flex flex-col gap-5 p-4 min-h-screen'>
      <div className='flex items-center justify-center gap-2'>
        <img src={MiLogo} className="w-auto h-32 object-contain"  />
      </div>
      <div>
        {navbarLinks.map((navlink, i) => (
          <nav key={i} className='flex flex-col gap-2'>
            <p className='text-stone-400 mt-5'>{navlink.title}</p>
            {navlink.links.map((link, j) => {
              const hasOptions = link.options && link.options.length > 0
              const isOpen = openMenus[link.name]

              return (
                <div key={j} className='flex flex-col'>
                  {hasOptions ? (
                    <>
                      <button
                        onClick={() => toggleMenu(link.name)}
                        className='flex justify-between items-center text-white hover:bg-gradient-to-r from-tertiary to-primary p-2 rounded'
                      >
                        <div className='flex items-center gap-2'>
                          {link.icon}
                          <span>{link.name}</span>
                        </div>
                        {isOpen ? (
                          <RiArrowDownSLine size={18} />
                        ) : (
                          <RiArrowRightSLine size={18} />
                        )}
                      </button>

                      {isOpen && (
                        <div className='ml-6 mt-1 flex flex-col gap-1 bg-green-900 rounded p-2'>
                          {link.options.map((sub, k) => (
                            <NavLink
                              to={sub.to}
                              key={k}
                              className='flex items-center gap-2 text-white hover:bg-primary p-2 rounded text-sm'
                            >
                              {sub.icon}
                              <span>{sub.name}</span>
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={link.to}
                      className='flex items-center gap-2 text-white hover:bg-gradient-to-r from-tertiary to-primary p-2 rounded'
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </NavLink>
                  )}
                </div>
              )
            })}
          </nav>
        ))}
      </div>
    </div>
  )
}
