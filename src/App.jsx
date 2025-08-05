import {Route, Routes, Navigate, Outlet} from 'react-router'
import Auth from './layouts/auth/Auth'
import { Login } from './pages/auth/Login'
import Home from './layouts/dashboard'
import Main from './pages/home/main/Main'
import {Food, Categories as FoodCategories, Recipes } from './pages/home/food'
import Invoice from './pages/home/invoice/Invoice'
import { Suppliers, Entries, Products, Categories } from './pages/home/store'

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
        <Route path="food" element={<Outlet/>}>
          <Route index element={<Food/>}/>
          <Route path="ingredients" element={<Recipes/>}/>
          <Route path="dishes" element={<Food/>}/>
          <Route path="categories" element={<FoodCategories/>}/>
        </Route>
        <Route path="recipes" element={<Recipes/>}/>
        <Route path="invoice" element={<Invoice/>}/>
        <Route path="store" element={<Outlet/>}>
          <Route index element={<Entries/>}/>
          <Route path="suppliers" element={<Suppliers/>}/>
          <Route path="entries" element={<Entries/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="categories" element={<Categories/>}/>
        </Route>
        <Route path="logout" element={<Navigate to="/login" replace />} />
      </Route>
    </Routes>
  )
}

export default App
