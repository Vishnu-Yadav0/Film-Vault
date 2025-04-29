import React from 'react'

const Watchlist = () => {
  return (
    <>
    <div className='flex justify-center flex-wrap m-4 gap-4'>
      <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold'>All Genres</div>
      <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/60 rounded-xl text-white font-bold'>Action</div>
      <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/60 rounded-xl text-white font-bold'>Adventure</div>
      <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/60 rounded-xl text-white font-bold'>Comedy</div>
    </div>

    <div className='flex justify-center my-4'>
        <input type="text" placeholder='Search Movies' className='h-[3rem] w-[18rem] px-2 border rounded-xl outline-none bg-gray-400/20'/>
    </div>

    <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
      <table className='w-full text-gray-500 text-center'>
        <thead className='border-b-2'>
          <tr>
            <th>Poster</th>
            <th>Name</th>
            <th>Ratings</th>
            <th>Popularity</th>
            <th>Genre</th>
          </tr>
        </thead>

        <tbody>
          <tr className='border-b'>
            <td className='py-4'>
              <img className='h-[8rem] w-[6rem] mx-auto' src="https://wallpaperaccess.com/full/917610.jpg" alt="" />
            </td>
            <td><div className='mx-10'>Black Panther </div></td>
            <td>8.5</td>
            <td>9</td>
            <td>Action</td>
            <td className='text-red-600 '>Delete</td>
          </tr>


          <tr className='border-b'>
            <td className='py-4'>
              <img className='h-[8rem] w-[6rem] mx-auto' src="https://wallpaperaccess.com/full/917610.jpg" alt="" />
            </td>
            <td><div className='mx-10'>Black Panther </div></td>
            <td>8.5</td>
            <td>9</td>
            <td>Action</td>
            <td className='text-red-600 '>Delete</td>
          </tr>

        </tbody>
      </table>

    </div>

    </>
  )
}

export default Watchlist
