import './App.css'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import { Route,Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

function App() {
  return(
    <div className='p-4 h-screen justify-center flex items-center'>
     <Routes>
      <Route path='/'element ={<Home />}></Route>
      <Route path='/login'element ={<Login />}></Route>
      <Route path='/signup'element ={<SignUp />}></Route>
     </Routes>
     <Toaster/>
    </div>
  )
}

export default App
