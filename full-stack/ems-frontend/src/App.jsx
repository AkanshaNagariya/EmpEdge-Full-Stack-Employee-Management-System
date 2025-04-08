import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import EmployeeComponent from './components/EmployeeComponent'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      {/* // http://localhost:3000    when user hit this link then correspoding component will be rendered*/} 
      <Route path='/' element = {<ListEmployeeComponent />}></Route>
      {/* // http://localhost:3000/employee when user hit this link then correspoding component will be rendered*/}
      <Route path='/employee' element = {<ListEmployeeComponent />}></Route>
      {/* // http://localhost:3000/add-employee   when user hit this link then correspoding component will be rendered*/}
      <Route path='/add-employee' element = {<EmployeeComponent />}></Route>
      {/* // http://localhost:3000/edit-employee/1  when user hit this link then correspoding component will be rendered*/}
      <Route path='/edit-employee/:id' element = {<EmployeeComponent />}></Route>
    </Routes>
    <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
