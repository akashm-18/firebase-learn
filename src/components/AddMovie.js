import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../config/firebase'
import { auth } from '../config/firebase' 
import Movies from './Movies'

const AddMovie = () => {

    const [movieName , setMovieName] = useState('')
    const [releaseDate , setReleaseDate] = useState(0)
    const [isGotOscar , setIsGotOscar] = useState(false)

    const movieCollectionRef = collection (db , "movies")

    const submitMovie = async () => {
        try {
          await addDoc(movieCollectionRef , { 
            title : movieName , 
            releaseDate : releaseDate , 
            receivedOscar : isGotOscar ,
            userId : auth?.currentUser?.uid
        })
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div className='movies'>
      <input placeholder='Enter Movie Name ..' onChange={(e) => setMovieName(e.target.value)} />
      <input placeholder='Release Date' type='number' onChange={(e) => setReleaseDate(e.target.value)} />
      <input type='checkbox' checked = {isGotOscar} onChange={(e) => setIsGotOscar(e.target.checked)} />
      <label>Received Oscar</label>
      <button onClick={submitMovie} >Submit</button>

      <Movies />
    </div>
  )
}

export default AddMovie
