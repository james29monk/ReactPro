import React, {useEffect, useState} from 'react'
import { useLoader, useFrame, Canvas } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { Stars } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import Earth from '../../solarMap/Earth'
import './CardStyle.css'
function MercuryCard() {
  return (
    <div>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      
    </div>
    <div className="flip-card-back">
      <Canvas>
      <OrbitControls />
      <pointLight intensity={5000}/>
        <Mercury />
        < Stars/>
      </Canvas>
    </div>
  </div>
</div>

    </div>
  )
}

export default MercuryCard