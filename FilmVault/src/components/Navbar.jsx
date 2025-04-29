import React from 'react'
import Logo from '../assets/movie-icon.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border-b border-gray-200 space-x-8 items-center pl-3 py-4'>
      <img src={Logo}  className='w-[50px]' alt="Logo" />
      <Link to="/" className='text-gray-600 text-3xl font-bold'>Movies</Link>
      <Link to="/watchlist" className='text-gray-600 text-3xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar
