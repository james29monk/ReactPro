import React, {useContext}  from 'react'
import { PlanetContext } from '../Home'
import './CardStyle.css'
function SaturnCard() {


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
    <img className='CardImgSat' src={PlanetData[5].imgSrc.img}/>
    </div>
    <div className="flip-card-back">
    <p>{PlanetData[5].planetOrder}</p>
      <h2>{PlanetData[5].name}</h2>
      <p>{PlanetData[5].description}</p>
    </div>
  </div>
</div>

    </div>
  )
}

export default SaturnCard