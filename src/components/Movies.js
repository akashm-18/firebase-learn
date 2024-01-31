import React, { useEffect, useState } from 'react'
import { getDocs , collection , deleteDoc, doc , updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
 
const Movies = () => {
    
    const [movieList , setMovieList] = useState([]) 
    const [newMovieName , setNewMovieName] = useState('')

    const moviesCollectionRef = collection (db , "movies")

    const getMoviesList = async () => {
        try {
            const data = await getDocs (moviesCollectionRef)
            const filteredData = data.docs.map((doc) => ({
                ...doc.data() , id : doc.id
            }))
            setMovieList (filteredData)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getMoviesList()
    } , [])

    const deleteMovie = async (id) => {
        const movieDoc = doc(db , "movies" , id)
        await deleteDoc (movieDoc)
    }

    const updateMovieName = async (id) => {
        const movieDoc = doc (db , "movies" , id)
        await updateDoc (movieDoc , { title : newMovieName } ) 
    }
 
  return (
    <div className='movies'>
      Movies 
       <div>
        {movieList.map((movie , index) => (
            <div key={index} >
                <h1 style ={{ color : movie.receivedOscar ? 'green' : 'red' }} > {movie.title} </h1>
                <h1> {movie.releaseDate} </h1>
                <button onClick={() => deleteMovie(movie.id)} >Delete Movie</button>

                <input placeholder='New Title...' onChange={(e) => setNewMovieName(e.target.value)} />
                <button onClick={() => updateMovieName(movie.id)}>Update Movie</button>
            </div>
        ))}
       </div>
    </div>
  )
}


export default Movies
