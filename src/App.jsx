import { useState } from 'react'

import appFirebase from './credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase)

import Home from './componenst/Home/Home'
import LoginForm from './componenst/LoginForm/LoginForm'
import './App.css'



function App() {
  
  const [usuario,setUsuario] = useState(null)
  
  onAuthStateChanged(auth,(usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  })

  return (
  <div>
    
    {usuario ? <Home correoUsuario = {usuario.email} /> : <LoginForm/>}
  </div>
  )
}

export default App
