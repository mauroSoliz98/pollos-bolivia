import { useState, useEffect } from 'react'
import { Outlet } from 'react-router'
import LoginFondo from '../../assets/images/fondoLogin.jpg'

const Auth = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-screen dark:bg-gray-950 dark:text-gray-200'>
      <Outlet/>
      {!isMobile && (
        <div className='flex flex-col items-center justify-center bg-linear-to-b from-primary to-red-500'>
          <img src={LoginFondo} alt="Login Background" className='w-200 h-150 object-cover bg-clip-content' />
        </div>
      )}
    </div>
  )
}

export default Auth