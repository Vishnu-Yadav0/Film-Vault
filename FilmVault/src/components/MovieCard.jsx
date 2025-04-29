import React from 'react'

function MovieCard({poster_path,name}) {
  return (
    <div className='w-[200px] h-[40vh] bg-center bg-cover rounded-xl hover:scale-110  duration-300 hover:cursor-pointer flex flex-col' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>

      <div className='mt-auto text-white text-xl w-full  p-2 text-center bg-gray-900/70 rounded-b-xl '>
        {name}
      </div>
    </div>
  )
}

export default MovieCard
