import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import Formik from './Components/Formik'
import Dashboard from './Components/Dashboard'

function App() {
  let token = localStorage.getItem("token")
  
  return (
    <>
      {/* <Signup/> */}
      <Routes>
        <Route path='/' element={<Signup/>} />
        <Route path='/formik' element={<Formik/>}/>
        <Route path='/signin' element={<Signin/>} />
        <Route path='/dashboard' element={token ? <Dashboard/>: <Navigate to = "/signin" />}/>
      </Routes>
    </>
  )
}

export default App