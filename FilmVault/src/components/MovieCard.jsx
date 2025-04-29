import React from 'react'
// import Watchlist from './Watchlist'

function MovieCard({movieObj,poster_path,name, handleAddtoWatchlist, handleRemoveFromWatchlist, watchlist}) {
  
  function doesContain(movieObj){
    for(let i=0;i<watchlist.length;i++){
      if(watchlist[i].id == movieObj.id){
        return true
      }
    }
  }

  return (
    <>
    <div className='w-[200px] h-[40vh] bg-center bg-cover rounded-xl hover:scale-110  duration-300 hover:cursor-pointer flex flex-col justify-between items-end' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>

      {doesContain(movieObj)? 
        <div onClick={()=>(handleRemoveFromWatchlist(movieObj))} className='m-2 bg-gray-400/50 flex justify-center h-8 w-8 items-center rounded-lg'>
           &#x274C; 
        </div> :

    <div onClick={()=>(handleAddtoWatchlist(movieObj))} className='m-2 bg-gray-400/50 flex justify-center h-8 w-8 items-center rounded-lg'>
      &#128525;
       {/* &#x274C; */}
    </div>}

      <div className='mt-auto text-white text-xl w-full  p-2 text-center bg-gray-900/70 rounded-b-xl '>
        {name}
      </div>
    </div>
    </>
  )
}

export default MovieCard
