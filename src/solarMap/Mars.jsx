import React, {useEffect, useState,} from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import Marstexter from '../Texters/Mars.jpeg'
import * as THREE from 'three'


const Mars = React.memo(()=> {
    const colorMap = useLoader(TextureLoader, Marstexter )
    const [hover,setHover ] =useState(false)
    const myMesh = React.useRef();
    const Dis = 17
    const [orbit,setOrbit] = useState(0.24077)
    const [followCamera,setFollowcamera]=useState(false)
    const [orbitOff, setOrbitoff] = useState(false)


    const followMars = ()=>{
      setFollowcamera((preFollowCamera)=>!preFollowCamera)
      setOrbitoff((preOrbitOff)=>!preOrbitOff)
      
    
      if(!orbitOff ){
        setOrbit(0)
      }else {
        setOrbit(0.24077)
      }
    }
    
    useFrame(({clock, camera}) => {
      myMesh.current.position.z = Math.cos(clock.getElapsedTime() * orbit)* Dis
      myMesh.current.position.x = Math.sin(clock.getElapsedTime() * orbit)* Dis
      myMesh.current.rotation.y += 0.01;

      const MarsPosition = myMesh.current.position


      const targetCamera = new THREE.Vector3(
        MarsPosition.y + 1,
        MarsPosition.x + .5,
        MarsPosition.z + -1 )
        
        
        if(followCamera ){
          camera.lookAt(MarsPosition)
          camera.position.copy(targetCamera)
        } 
    });

    useEffect(()=>{
      document.body.style.cursor = hover ? 'pointer':'auto'
    },[hover])
  return (
    <>
  
    <mesh ref ={myMesh}
    onClick={followMars}
    onPointerOver={()=>setHover(true)}
    onPointerOut={()=>setHover(false)}
    >
        <sphereGeometry args={[0.6,32,32]}/>
        <meshStandardMaterial map  ={colorMap} 
        emissive={0xffffff}
        emissiveIntensity={ hover ? 1 : 0}
        />
    </mesh>
    </>
  )
})


export default Mars