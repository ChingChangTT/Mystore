
import './App.css'
import Mynavbar from './component/Mynavbar'
import Footer from './component/Footer'
import Home from './component/Home'
import { Route, Routes } from 'react-router-dom'
import Men from './component/Men'
import { DataProvider } from './context/DataContext'
import Women from './component/Women'
import About from './component/About'
import Contact from './component/Contact'
import Cart from './component/Cart'
function App({text}) {
  return (
    <>
      <DataProvider>
    <Mynavbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Men' element={<Men/>}></Route>
      <Route path='/women' element={<Women/>}></Route>
      <Route path='/aboutUs' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    
    <Footer/>
    </DataProvider>
    </>
    
  )
}

export default App
