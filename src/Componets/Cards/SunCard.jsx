import React, {useContext}  from 'react'
import { PlanetContext } from '../Home'
import './CardStyle.css'
function SunCard() {

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
      
    </div>
    <div className="flip-card-back">
    <p>{PlanetData[0].planetOrder}</p>
      <p>{PlanetData[0].name}</p>
      <p>{PlanetData[0].description}</p>
    </div>
  </div>
</div>

    </div>
  )
}

export default SunCard