import React, { useEffect,useState,useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import Jupitertexter from '../Texters/Jupiter2.webp'
import * as THREE from 'three'

const Jupiter = React.memo(()=>{
    
    const colorMap = useLoader(TextureLoader, Jupitertexter )
    const [hover,setHover ] =useState(false)
    const [followCamera,setFollowcamera]=useState(false)
    const myMesh = useRef();
    const [orbitOff, setOrbitoff] = useState(false)
    const [orbit,setOrbit] = useState(0.1307)
    const Dis = 22
    
    
    const followJupiter = ()=>{
      setFollowcamera((preFollowCamera)=>!preFollowCamera)
      setOrbitoff((preOrbitOff)=>!preOrbitOff)
      
      if(!orbitOff ){
        setOrbit(0)
      }else {
        setOrbit(0.1307)
      }
    }

    useEffect(()=>{
        document.body.style.cursor = hover ? 'pointer':'auto'
      },[hover])
      
     useFrame(({clock, camera}) => {
      myMesh.current.position.z = Math.cos(clock.getElapsedTime() * orbit)* Dis
      myMesh.current.position.x = Math.sin(clock.getElapsedTime() * orbit)* Dis
      myMesh.current.rotation.y += 0.01;
      
      const JupiterPosition = myMesh.current.position

      const targetCamera = new THREE.Vector3(
        JupiterPosition.y + 4,
        JupiterPosition.x + 1,
        JupiterPosition.z + -4 )
      
        if(followCamera ){
          camera.lookAt(JupiterPosition)
          camera.position.copy(targetCamera)
        } 
    });

  return (
    <>
    <mesh ref ={ myMesh}
     onClick={followJupiter}
      onPointerOver={()=>setHover(true)}
      onPointerOut={()=>setHover(false)}
    >
        <sphereGeometry args={[2,32,32]} />
        <meshStandardMaterial
         map  ={colorMap}
         emissive={0xffffff}
         emissiveIntensity={ hover ? 1 : 0}
          />
    </mesh>
    </>
  )
})


export default Jupiter