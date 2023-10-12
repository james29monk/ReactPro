import React, { createContext ,useState} from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from '../solarMap/Experience'
import { OrbitControls, Stars} from '@react-three/drei'
import '../App.css'

export const Rotation = createContext()
  
function Donation() {
    const [rotate,setRotate] = useState(false)


  return (
    <div className='donateDiv'>
    <Canvas camera={{fov: 5, near: 0.1, far: 1000, position: [27,16,18] }}>
    <OrbitControls/>
    <Rotation.Provider value={[rotate,setRotate]}>
    <Experience/>
    </Rotation.Provider>
    </Canvas>
    </div>
  )
}

export default Donation