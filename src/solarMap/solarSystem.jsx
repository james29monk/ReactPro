import React from 'react'
import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CameraPosition from '../Functions/CameraPosition'
import Sun from './Sun'
import Earth from './Earth'
import Mercury from './Mercury'
import Venus from './Venus'
import Mars from './Mars'
import Jupiter from './Jupiter'
import Saturn from './Saturn'
import Uranus from './Uranus'
import Neptune from './Neptune'

function solarSystem() {
  return (
    <>
    {/* Canvas component is what makes the 3D space  */}
   <Canvas camera={{fov: 75, near: 0.1, far: 1000, position: [27,16,18] }}>
    {/* OrbitControls allows you to move the camera around the scene with your mouse */}
   <OrbitControls />
   <CameraPosition event='mousedown'/>
   <color attach='background' args={['black']}/>
   <pointLight intensity={2000}/>
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