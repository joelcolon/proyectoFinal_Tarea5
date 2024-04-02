/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./LoginForm.module.css";

import appFirebase from "../../credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase)

const LoginForm = () => {

    const [registrando,setRegistrando]=useState(false)

    const funcAutenticacion = async(e)=>{
        e.preventDefault();
        const correo = e.target.email.value;
        const Contraseña = e.target.password.value;
       
        
        if(registrando){
            await createUserWithEmailAndPassword(auth, correo, Contraseña)
        }
        else{
            await signInWithEmailAndPassword(auth, correo, Contraseña)
        }
    }

  return (
    <div>
      <div>
        <h2>{registrando ? "Registrando" : "Inicio de sesión"}</h2>
        <form onSubmit={funcAutenticacion} className={styles.formulario} >
          <input
            className={styles.casilla}
            type="text"
            placeholder="Ingresar Email"
            id="email"
          />
          <input
            className={styles.casilla}
            type="password"
            placeholder="Ingresar Contraseña"
            id="password"
          />
          {registrando ? <input  className={styles.casilla}
            type="text"
            placeholder="Ingresar Nombre "
            id="usuario"/> : ""}

            {registrando ? <input  className={styles.casilla}
            type="text"
            placeholder="Ingresar Apellido "
            id="apellido"/> : ""}
       
          <button className={styles.iniciar}>
            {registrando ? "Registrate" : "Iniciar Sesion"}
          </button>
        </form>
          <h4> {registrando ? "¿ya tienes una cuenta?" : "¿No tienes cuenta?"}
            <a className={styles.registro} onClick={()=>setRegistrando(!registrando)}> {registrando ? "Iniciar Sesion" : "Registrate"}
          </a>
          </h4>
      </div>
    </div>
  );
};

export default LoginForm;
