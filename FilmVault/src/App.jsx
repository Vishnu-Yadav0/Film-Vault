import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";

function App() {

  let [watchlist, setWatchlist] = useState([]);

  let handleAddtoWatchlist = (movieObj) =>{
    let newWatchlist = [...watchlist, movieObj]
    localStorage.setItem('moviesApp',JSON.stringify(newWatchlist))
    setWatchlist(newWatchlist)
    console.log(newWatchlist)
  }

  let handleRemoveFromWatchlist = (movieObj) =>{
    let filteredWatchlist = watchlist.filter((movie) =>{
      return movie.id != movieObj.id
    })
    setWatchlist(filteredWatchlist);
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchlist));
    
  }

  useEffect(() =>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp');
    if(!moviesFromLocalStorage){
      return
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage))
  },[]);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies watchlist={watchlist} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} setWatchlist={setWatchlist}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
