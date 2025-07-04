import {Route, Routes} from 'react-router'
import Home from './layouts/dashboard'

function App() {

  return (
    <Routes>
      <Route index element={<Home/>}/>
    </Routes>
  )
}

export default App
