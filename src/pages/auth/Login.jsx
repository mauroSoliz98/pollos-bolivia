import {useState} from 'react'
import LoginInput from '../../components/LoginInput'
import DarkModeToggle from '../../components/DarkModeToggle'
import {useNavigate} from 'react-router'  

export const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    user: '',
    password: ''
  })

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!data.user || !data.password) {
      alert('Por favor, complete todos los campos.')
      return
    }
    navigate('/home') // Redirect to dashboard on successful login
  }
  // Handle input changes
  const handleChange = (e) => {
    setData({...data, [e.target.id]: e.target.value})
  }
  return (
    <div className='h-screen flex flex-col items-center justify-center p-4 gap-0.5 relative'>
      <div className='absolute top-4 left-4 z-10'>
        <DarkModeToggle/>
      </div>
        <h1>Titulo</h1>
        <h1 className='font-bold text-3xl'>Bienvenido</h1>
        <p className='text-stone-500'>Inicia sesión para continuar</p>
        <form className='flex flex-col gap-5 w-full max-w-sm' onSubmit={handleSubmit}>
            <LoginInput label="Username" 
                        type="text" 
                        id="user" 
                        placeholder='Ingrese su usuario'
                        onChange={handleChange}
                        value={data.user}
            />
            <LoginInput label="Contraseña" 
                        type="password" 
                        id="password" 
                        placeholder='Ingrese su contraseña'
                        onChange={handleChange}
                        value={data.password}
            />
            <button className='bg-primary p-2 text-amber-50 rounded-md hover:bg-red-700 hover:shadow-lg hover:shadow-red-700/50 ' 
                    type='submit'
            >
                Iniciar sesión
            </button>
        </form>
    </div>
  )
}
