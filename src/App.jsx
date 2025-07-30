import {Route, Routes, Navigate} from 'react-router'
import Auth from './layouts/auth/Auth'
import { Login } from './pages/auth/Login'
import Home from './layouts/dashboard'
import Main from './pages/home/main/Main'
import Food from './pages/home/food/Food'
import Invoice from './pages/home/invoice/Invoice'
import Store from './pages/home/store/Store'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigate to="/login" replace />} />

      <Route path='/login' element={<Auth/>}>
        <Route index element={<Login/>}/>
      </Route>
      
      <Route path='/home' element={<Home/>}>
        <Route index element={<Main/>}/>
        <Route path="main" element={<Main/>}/>
        <Route path="food" element={<Food/>}/>
        <Route path="invoice" element={<Invoice/>}/>
        <Route path="store" element={<Store/>}/>
        <Route path="logout" element={<Navigate to="/login" replace />} />
      </Route>
    </Routes>
  )
}

export default App
