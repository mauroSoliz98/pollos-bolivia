import React from 'react'
import MiLogo from '../../assets/images/LogoPollo.png'
import { navbarLinks } from '../../constants'
import {NavLink} from 'react-router'

export const Sidebar = () => {
  return (
    <div className='bg-tertiary flex flex-col gap-5 p-4'>
      <div className='flex items-center justify-center gap-2'>
        <img src={MiLogo} className='w-30 h-20'/>
      </div>
      <div>
        { navbarLinks.map((navlink, index) => (
          <nav key={index} className='flex flex-col gap-2'>
            <p className='text-stone-400 mt-5'>{navlink.title}</p>
            { navlink.links.map( (link, index) => (
              <NavLink to={link.to} key={index} className='flex items-center gap-2 text-white hover:bg-linear-to-r from-tertiary to-primary p-2 rounded'>
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            ))}
          </nav>
        ))}
      </div>
    </div>
  )
}
