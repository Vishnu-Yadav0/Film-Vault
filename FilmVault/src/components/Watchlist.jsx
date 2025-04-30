import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import genreIdToName from '../utilities/genreMapping';



const Watchlist = ({watchlist,setWatchlist, handleRemoveFromWatchlist}) => {

  const [search, setSearch] = useState('')

  let handleSearch = (e) =>{
    setSearch(e.target.value)
  }

  let sortIncreasing = () =>{
    let sortedIncreasing = watchlist.sort((movieA,movieB) =>{
      return movieA.vote_average - movieB.vote_average
    })

    setWatchlist([...sortedIncreasing])
  }

  let sortDecreasing = () =>{
    let sortedDecreasing = watchlist.sort((movieA, movieB)=>{
      return movieB.vote_average - movieA.vote_average
    })

    setWatchlist([...sortedDecreasing])
  }



  return (
    <>
    <div className='flex justify-center flex-wrap m-4 gap-4'>
      <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold'>All Genres</div>
      <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/60 rounded-xl text-white font-bold'>Action</div>
      <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/60 rounded-xl text-white font-bold'>Adventure</div>
      <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/60 rounded-xl text-white font-bold'>Comedy</div>
    </div>

    <div className='flex justify-center my-4'>
        <input onChange={handleSearch} value={search} type="text" placeholder='Search Movies' className='h-[3rem] w-[18rem] px-2 border rounded-xl outline-none bg-gray-400/20'/>
    </div>

    <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
      <table className='w-full text-gray-500 text-center'>
        <thead className='border-b-2'>
          <tr>
            <th>Poster</th>
            <th>Name</th>
            <th className='flex justify-center gap-2'>
              <div onClick={sortIncreasing} className='hover:cursor-pointer'><i className="fa-solid fa-arrow-up"></i></div>
              Ratings
              <div onClick={sortDecreasing} className='hover:cursor-pointer'><i className="fa-solid fa-arrow-down"></i></div>
              </th>
            <th>Popularity</th>
            <th>Genre</th>
          </tr>
        </thead>

        <tbody>

          {watchlist.filter((movieObj)=>{
            return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
          }).map((movieObj)=>{
            return <tr  key={movieObj.id} className='border-b'>
            <td className='py-4'>
              <img className='h-[8rem] w-[6rem] mx-auto' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt="" />
            </td>
            <td><div className='mx-10'>{movieObj.title} </div></td>
            <td>{movieObj.vote_average}</td>
            <td>{movieObj.popularity}</td>
            <td>{movieObj.genre_ids.map(id => genreIdToName[id]).join(", ")}</td>
            <td >
              <button onClick={() => handleRemoveFromWatchlist(movieObj)} className='text-red-600 hover:text-red-800 text-lg'>
              <FaTrash size={30}/>
              </button> 
            </td>
          </tr>
          })}

        </tbody>
      </table>

    </div>

    </>
  )
}

export default Watchlist
