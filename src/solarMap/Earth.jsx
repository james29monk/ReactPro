import React, {useEffect, useState, useContext} from 'react'
import * as THREE from 'three'
import { useLoader, useFrame , useThree} from '@react-three/fiber'
import { TextureLoader } from 'three'
import Earthtexter from '../Texters/earthmap.jpg'
import NightEarth from '../Texters/nightEarth .jpeg'
import Experience from './Experience'

function Earth() {
  const colorMap = useLoader(TextureLoader, Earthtexter )
  const nightMap = useLoader(TextureLoader, NightEarth)
  const [hover,setHover ] =useState(false)
  const [followCamera,setFollowcamera]=useState(false)
  const myMesh = React.useRef();
  const [orbitOff, setOrbitoff] = useState(false)
  const [orbit,setOrbit] = useState(0.2978)
  const Dis = 14

  
  
  
  
   const followEarth = ()=>{
    setFollowcamera((preFollowCamera)=>!preFollowCamera)
    setOrbitoff((preOrbitOff)=>!preOrbitOff)
    if(!orbitOff){
      setOrbit(0)
    }else{
      setOrbit(0.2978)
    }


   }
  
  useEffect(()=>{
    document.body.style.cursor = hover ? 'pointer':'auto'
  },[hover])


      useFrame(({clock, camera }) => {
        myMesh.current.position.z = Math.cos(clock.getElapsedTime() * orbit)* Dis
        myMesh.current.position.x = Math.sin(clock.getElapsedTime() * orbit)* Dis
        myMesh.current.rotation.y += 0.01;

        const earthPosition = myMesh.current.position
        
        const targetCamera = new THREE.Vector3(
          earthPosition.y + 2,
          earthPosition.x + 1,
          earthPosition.z + -.5 )

          
          if(followCamera){
            camera.lookAt(earthPosition)
            camera.position.copy(targetCamera)


          } 

          
          
        });
  return (
    <>
    
    <mesh ref ={myMesh}rotation={[0,5,0]}
     onClick={followEarth}
     onPointerOver={()=>setHover(true)}
     onPointerOut={()=>setHover(false)}
     >
        <sphereGeometry args={[.8,32,32]} />
        <meshStandardMaterial
         map  ={colorMap}
         emissiveMap={nightMap}
         emissive={0xffffff}
         emissiveIntensity={ hover ? 20 : 1.5}
         />
         {/* <Experience/> */}
    </mesh>
    </>
  )
}


export default Earth