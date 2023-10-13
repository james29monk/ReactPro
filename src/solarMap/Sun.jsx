import React, {useEffect, useState, useRef} from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import SunPic from '../Texters/8k_sun.jpg'

const Sun = React.memo(()=> {
    const colorMap = useLoader(TextureLoader, SunPic)
    const [hover,setHover ] =useState(false)
    const [followCamera,setFollowcamera]=useState(false)
    const myMesh = useRef();

      useFrame(({camera}) => {
        myMesh.current.rotation.y -= 0.01;
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
        <sphereGeometry args={[4,32,32]}/>
        <meshBasicMaterial map  ={colorMap}
        />
    </mesh>
    </>
  )
})

export default Sun