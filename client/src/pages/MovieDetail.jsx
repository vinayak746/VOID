import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  const {id}=useParams();
  const [show, setShow]=useState(null);

  const getShow = async ()=>{
    
  }
  return (
    <div>
      
      </div>
  )
}

export default MovieDetail