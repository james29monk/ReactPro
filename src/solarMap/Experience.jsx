import React, {useEffect, useState, useContext} from 'react'
import { useLoader, useFrame} from '@react-three/fiber'
import { TextureLoader } from 'three'
import BoxImg from '../Texters/bmc_qr.png'



const Experience = React.memo(() =>{
    const myMesh = React.useRef();
    const colorMap = useLoader(TextureLoader, BoxImg)
    const [hover,setHover ] =useState(false)
    useEffect(()=>{
        document.body.style.cursor = hover ? 'pointer':'auto'
      },[hover])

    useFrame(() => {
    myMesh.current.rotation.y += 0.02
    myMesh.current.rotation.x += 0.02
      });
  return (
    <>
    <mesh ref={myMesh} 
    position={[1.5,0,0]}
    onPointerOver={()=>setHover(true)}
    onPointerOut={()=>setHover(false)}
    > 
      <boxGeometry   args={[.2, .2, .2]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
    </>
  )
})

export default Experience
