import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import "./Rowpost.css"
import axios from '../Axios';
import { imageUrl ,API_KEY } from '../../Constans/Constans';

function Rowpost(props) {

  const [movies, setMovies] = useState([]);
  const [urlid, setUrlid] = useState([]);
  useEffect(() => {
 
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    })

  }, []);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const movieHandle = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response =>{
     console.log(response.data)
     if (response.data.results.length!==0){
      setUrlid(response.data.results[0])
     }else{
      console.log('trail not avilabeler')
     }
  
    })
  }
  return (
    <div className='row'>
        <h2 className="title">{props.title}</h2>
        <div className="posters">
          {movies.map((movie)=>

<img  onClick={()=>movieHandle(movie.id)} className={props.isSmall?"smallimg":"img"} src={`${imageUrl+movie.backdrop_path}`} alt="image" />

          )}
          
       
        </div>
        
        {props.title === "Netflix Orginals" && urlid && <YouTube videoId={urlid.key} opts={opts} />}
    </div>
  )
}

export default Rowpost