import React, { useState } from 'react'
import { auth , googleProvider } from '../config/firebase.js'
import { createUserWithEmailAndPassword , signInWithPopup , signOut} from 'firebase/auth'

const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [currentUser , setCurrentUser] = useState(null)

    console.log(auth?.currentUser?.email)

    const signup = async () => {
        try {
            await createUserWithEmailAndPassword(auth , email , password)
            setCurrentUser(auth?.currentUser?.email)
        }
        catch (err) {
            console.error(err)
        }
    }

    const signUpwithGoogle = async () => {
        try {
           const result =  await signInWithPopup(auth , googleProvider)
           const user = result.user
           setCurrentUser(user.email)
        } catch (error) {
            console.error(error)
        }
    }

    const logout = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.error(error)
        }
    }


  return (
    <div>
        
      <h1>CurrentUser : {currentUser} </h1>
      <input placeholder='Enter Your Email...' onChange={(e) => setEmail(e.target.value)}  />
      <input placeholder='Enter Your Password' type='password' onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={signup} >Sign up</button>

      <button onClick={signUpwithGoogle} >Sign Up with Google Account</button>

      <button onClick={logout}>Log out</button>
    </div>
  )
}

export default Signup
