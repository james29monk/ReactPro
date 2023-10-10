import React, {useContext}  from 'react'
import { PlanetContext } from '../Home'
import './CardStyle.css'
function UranusCard() {
    const PlanetData = useContext(PlanetContext)
    console.log(PlanetData)
   
    if (!PlanetData || PlanetData.length === 0) {
     return <div>Loading...</div>;
   }

  return (
    <div>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <img className='CardImg' src={PlanetData[6].imgSrc.img}/>  
    </div>
    <div className="flip-card-back">
    <p>{PlanetData[6].planetOrder}</p>
      <h2>{PlanetData[6].name}</h2>
      <p>{PlanetData[6].description}</p>
    </div>
  </div>
</div>

    </div>
  )
}

export default UranusCard