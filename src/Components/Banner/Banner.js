import React, { useState } from 'react'
import { useEffect } from 'react'
import "./Banner.css"
import {API_KEY} from "../../Constans/Constans"
import axios from '.././Axios'
import { imageUrl } from '../../Constans/Constans'
const Banner = () => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data)
      setMovie(response.data.results[4])
      let value = Math.floor(Math.random() * response.data.results.length)
      if(!response.data.results[value].title){
          value += 1
      }
      setMovie(response.data.results[value])

    })
  
  }, []);
 
  return (
    <div className='banner' style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}> 
     <div className='content'>
        <h1 className='title'>{movie?movie.title:""}</h1>
        <div className='banner-button'>
            <button className='button'>Play</button>
            <button className='button'>my list</button>
        </div>
        <h1 className='description'>
{movie? movie.overview:""}
</h1>
     </div>
     <div className="fade"></div>

    </div>
  )
}

export default Banner