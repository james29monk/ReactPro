import React, {useEffect,useState,useRef} from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import Saturntexter from '../Texters/vite.config.jpeg'
import * as THREE from 'three'

const Saturn = React.memo(()=> {
    const colorMap = useLoader(TextureLoader, Saturntexter )
    const myMesh = useRef();
    const [hover,setHover ] =useState(false)
    const [orbit,setOrbit] = useState(0.0969)
    const [followCamera,setFollowcamera]=useState(false)
    const [orbitOff, setOrbitoff] = useState(false)
    const Dis = 28

    const followSaturn = ()=>{
      setFollowcamera((preFollowCamera)=>!preFollowCamera)
      setOrbitoff((preOrbitOff)=>!preOrbitOff)
      
      if(!orbitOff ){
        setOrbit(0)
      }else {
        setOrbit(0.0969)
      }
    }

    useFrame(({clock, camera}) => {
      myMesh.current.position.z = Math.cos(clock.getElapsedTime() * orbit)* Dis
      myMesh.current.position.x = Math.sin(clock.getElapsedTime() * orbit)* Dis
      myMesh.current.rotation.y += 0.02;

      const SaturnPosition = myMesh.current.position

      const targetCamera = new THREE.Vector3(
        SaturnPosition.y + 5,
        SaturnPosition.x + .5,
        SaturnPosition.z + -3 )
        
        if(followCamera ){
          camera.lookAt(SaturnPosition)
          camera.position.copy(targetCamera)
        } 
    });
    useEffect(()=>{
      document.body.style.cursor = hover ? 'pointer':'auto'
    },[hover])
    
  return (
    <>
    <mesh ref ={myMesh}
      onClick={followSaturn}
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
})

export default Saturn