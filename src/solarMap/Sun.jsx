import React, {useEffect, useState, createContext} from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import * as THREE from 'three'
import SunPic from '../Texters/Sun.jpeg'
import Mercury from './Mercury'
import Venus from './Venus'
import Earth from './Earth'
import Mars from './Mars'
import Jupiter from './Jupiter'
import Saturn from './Saturn'
import Uranus from './Uranus'
import Neptune from './Neptune'

function Sun() {
    const colorMap = useLoader(TextureLoader, SunPic)
    const [hover,setHover ] =useState(false)
    const [followCamera,setFollowcamera]=useState(false)
    const myMesh = React.useRef();

    

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
}

export default Sun