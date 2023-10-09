import React, { useState, createContext }  from 'react'
import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import CameraPosition from '../Functions/CameraPosition.jsx'
import Sun from './Sun'
import Earth from './Earth'
import Mercury from './Mercury'
import Venus from './Venus'
import Mars from './Mars'
import Jupiter from './Jupiter'
import Saturn from './Saturn'
import Uranus from './Uranus'
import Neptune from './Neptune'


 export const OrbitContext = createContext()

function solarSystem() {







  return (
    <>
   <Canvas camera={{fov: 75, near: 0.1, far: 1000, position: [27,16,18] }}>
   <OrbitControls />
   <CameraPosition event='mousedown'/>
   <color attach='background' args={['black']}/>
   <pointLight intensity={5000}/>
   <Sun />
   <Mercury />
   <Venus />
   <Earth />
   <Mars />
   <Jupiter />
   <Saturn />
   <Uranus />
   <Neptune />
   <Stars />
   </Canvas>
    </>
  )
}

export default solarSystem