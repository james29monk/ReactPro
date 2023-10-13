import React, {useEffect, useState, useRef} from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import Venustexter from '../Texters/venus2.jpeg'
import * as THREE from 'three'

const Venus = React.memo(()=> {
    const colorMap = useLoader(TextureLoader, Venustexter )
    const [hover,setHover ] =useState(false)
    const myMesh = useRef();
    const Dis = 10
    const [orbit,setOrbit] = useState(0.3502)
    const [followCamera,setFollowcamera]=useState(false)
    const [orbitOff, setOrbitoff] = useState(false)

    const followVenus = ()=>{
      setFollowcamera((preFollowCamera)=>!preFollowCamera)
      setOrbitoff((preOrbitOff)=>!preOrbitOff)
      
      if(!orbitOff ){
        setOrbit(0)
      }else {
        setOrbit(0.3502)
      }
    }

    useFrame(({clock, camera}) => {
      myMesh.current.position.z = Math.cos(clock.getElapsedTime() * orbit)* Dis
      myMesh.current.position.x = Math.sin(clock.getElapsedTime() * orbit)* Dis
      myMesh.current.rotation.y += 0.01;

      const VenusPosition = myMesh.current.position

        const targetCamera = new THREE.Vector3(
          VenusPosition.y + 2,
          VenusPosition.x + .5,
          VenusPosition.z + -1 )
          
          
          if(followCamera ){
            camera.lookAt(VenusPosition)
            camera.position.copy(targetCamera)
          } 
    });
      
    useEffect(()=>{
      document.body.style.cursor = hover ? 'pointer':'auto'
    },[hover])
    
  return (
    <>
    <mesh ref ={myMesh}
    onClick={followVenus}
    onPointerOver={()=>setHover(true)}
    onPointerOut={()=>setHover(false)}
    >
        <sphereGeometry args={[0.9,32,32]}/>
        <meshStandardMaterial map  ={colorMap}
        emissive={0xffffff}
        emissiveIntensity={ hover ? 1 : 0}
        />
    </mesh>
    </>
  )
})

export default Venus