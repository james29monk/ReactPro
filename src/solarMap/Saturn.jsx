import React, {useEffect,useState} from 'react'
import { OrbitControls } from '@react-three/drei'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import Saturntexter from '../Texters/Saturn.jpeg'



function Saturn() {
    const colorMap = useLoader(TextureLoader, Saturntexter )
    const myMesh = React.useRef();
    const [hover,setHover ] =useState(false)

    const Dis = 28
    const OrbitSpeed = 0.0969
    useFrame(({clock}) => {
      myMesh.current.position.z = Math.cos(clock.getElapsedTime() * OrbitSpeed)* Dis
      myMesh.current.position.x = Math.sin(clock.getElapsedTime() * OrbitSpeed)* Dis
      myMesh.current.rotation.y += 0.02;
    });
    useEffect(()=>{
      document.body.style.cursor = hover ? 'pointer':'auto'
    },[hover])
    
  return (
    <>
    
    <mesh ref ={myMesh}rotation={[0,5,0]} 
      onPointerOver={()=>setHover(true)}
      onPointerOut={()=>setHover(false)}
    >
        <sphereGeometry args={[1.9,32,32]} />
        <meshStandardMaterial map  ={colorMap}
         emissive={0xffffff}
         emissiveIntensity={ hover ? 1 : 0}
        />
    </mesh>
    </>
  )
}


export default Saturn