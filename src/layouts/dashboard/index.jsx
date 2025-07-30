import {useState, useEffect} from 'react'
import { RiFunctionLine, RiCloseLargeFill } from 'react-icons/ri'
import { Footer } from './Footer'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Outlet } from 'react-router'

const index = () => {
  const [visible, setVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

 useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='grid h-screen md:grid-cols-[250px_1fr] grid-cols-1 relative gap-2 bg-white dark:bg-gray-950 dark:text-neutral-200 '>
      {!isMobile && <Sidebar />}
      <div className='flex flex-col h-screen gap-2 py-2 pr-2'>
        <Header />
        <main className='flex-1 overflow-auto p-4 bg-stone-100 dark:bg-gray-900'> 
          <Outlet/> 
        </main>
        <Footer />
      </div>
      {isMobile && (
        <button 
          className='fixed bottom-4 right-4 transition duration-300 bg-red-800 border-4 border-red-700  text-white p-2 rounded-full shadow-lg shadow-red-500/50 z-50'
          onClick={() => setVisible(!visible)}
        >
          {!visible ? <RiFunctionLine size={40}/> : <RiCloseLargeFill size={40} />}
        </button>
      )}
       {/* Sidebar móvil con animación */}
      {isMobile && (
        <div
          className={`fixed top-0 left-0 w-full bg-white shadow-lg z-40 transition-transform duration-300 ${
            visible ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <Sidebar />
        </div>
      )}
    </div>
  )
}

export default index