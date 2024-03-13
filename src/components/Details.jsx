import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'

const Details = () => {
    
    const [allmovies, setAllmovies] = useState([])
    const [videos, setVideos] = useState([])

 
const getAllmovie = async () => {
    try{
        await fetch ('https://api.themoviedb.org/3/discover/movie?api_key=528f87728aee2ed45584d7e02ef65390')
        .then(res => res.json())
        .then(json => setAllmovies(json.results))
    }catch(err){
        console.error(err)
    }
}    

const getVideos = async () => {
    try{
        await fetch (`https://api.themoviedb.org/3/movie/${id}/videos?api_key=528f87728aee2ed45584d7e02ef65390`)
        .then(res => res.json())
        .then(json => setVideos(json.results))
    
    }catch(err){
        console.error(err)
    }
    
    
}

useEffect(() => {
    getAllmovie()
    getVideos()
},[])


  return (
    <div>
        {allmovies.map((data) => {
            return
             <>
             <div key={data.id}>
            <YouTube videoId={videos[0]?.key}/>
            </div>
            </>
        })}

    </div>
  )
}

export default Details;