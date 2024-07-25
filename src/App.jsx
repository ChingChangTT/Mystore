
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MyFooter from './component/comFoot'
import { ShoppingResult } from './component/Shopping'
import  {Cardresult} from './component/ItemCard'

import Work from './component/Work'
import  { DetailResult } from './component/Detailcard'
import SliderIndicatorsInside from './component/SlideCard'
import LogIn from './component/LogIn'
import SignUp from './component/SignUp'
import MyNavabar from './component/Nav_bar'
import MyComponent from './component/Tablecom'
import NotFound from './component/NotFound'
import UserCard from './component/UserCard'

function App() {
  return (
    <>
  <MyNavabar/>
    <Routes>
      <Route path='/' element={<Cardresult/>}/>
      <Route path='/read' element={<Work/>}/>  
      <Route path='/detail/:id' element={<DetailResult/>} />
      <Route path='/shopping/:id' element={<ShoppingResult/>}/>
      <Route path='/shopping' element={<ShoppingResult/>}/>
      <Route path='/collection' element={<SliderIndicatorsInside/>}/>
      <Route path='/logIn' element={<LogIn/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/Dash' element={<MyComponent/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/User' element={<UserCard/>}/>
    </Routes>
    <MyFooter/>
    </>
    
  )
}

export default App
