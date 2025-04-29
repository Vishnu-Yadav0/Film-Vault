import React,{ useEffect } from 'react'
import { useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from '../Pagination'

function Movies() {

    const [movies, setMovies] = useState([])
    const [pageNo, setPageNo] = useState(1)

    const handlePrev =()=>{
        if(pageNo>1){
            setPageNo(pageNo-1);
        }
    }

    const handleNext = () =>{
        setPageNo(pageNo+1);
    }

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=93b16ec2f51d41daba332632d255beb4&language=en-US&page=${pageNo}`).then(function(res){
            setMovies(res.data.results)
        })
    }, [pageNo])
  return (
    <div className='p-5'>
        <div className='text-2xl m-5 font-bold text-center' > 
            Trending Movies
        </div>
        <div className='flex flex-row flex-wrap justify-around gap-4'>

            {movies.map((movieObj) => {
                return <MovieCard key={movieObj.id} poster_path={movieObj.poster_path} name={movieObj.title} movie={movieObj}/>
            })}

        </div>
        <Pagination handleNext={handleNext} handlePrev={handlePrev} pageNo={pageNo}/>
    </div>
  )
}

export default Movies

//https://api.themoviedb.org/3/movie/popular?api_key=93b16ec2f51d41daba332632d255beb4&language=en-US&page=1;