import React from 'react'
import MiLogo from '../../assets/images/githubIcon.png'
import { navbarLinks } from '../../constants'
import {NavLink} from 'react-router'

export const Sidebar = () => {
  return (
    <div className='bg-linear-to-t from-red-500 to-rose-500 flex flex-col gap-10 p-4'>
      <div className='flex items-center justify-center gap-2'>
        <img src={MiLogo} className='bg-white bg-clip-content rounded-full size-12'/>
        <div>
          <h1 className='text-white font-bold'>Dashboar Pro</h1>
          <h1 className='text-stone-200'>Fried Chickend</h1>
        </div>
      </div>
      <div>
        { navbarLinks.map((navlink, index) => (
          <nav key={index} className='flex flex-col gap-2'>
            <p className='text-stone-400 mt-5'>{navlink.title}</p>
            { navlink.links.map( (link, index) => (
              <NavLink to={link.to} key={index} className='flex items-center gap-2 text-white hover:bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 p-2 rounded'>
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
