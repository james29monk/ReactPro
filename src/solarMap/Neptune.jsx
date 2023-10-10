import React, {useEffect,useState} from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import Neptunetexter from '../Texters/Neptune.jpeg'
import * as THREE from 'three'


function Neptune() {
    const colorMap = useLoader(TextureLoader, Neptunetexter )
    const [hover,setHover ] =useState(false)
    const [orbit,setOrbit] = useState(0.0543)
    const [followCamera,setFollowcamera]=useState(false)
    const [orbitOff, setOrbitoff] = useState(false)
    const myMesh = React.useRef();
    const Dis = 40


    const followNeptune = ()=>{
      setFollowcamera((preFollowCamera)=>!preFollowCamera)
      setOrbitoff((preOrbitOff)=>!preOrbitOff)
      
    
      if(!orbitOff ){
        setOrbit(0)
      }else {
        setOrbit(0.0543)
      }
    }
  
      useFrame(({clock, camera}) => {
        myMesh.current.position.z = Math.cos(clock.getElapsedTime() * orbit)* Dis
        myMesh.current.position.x = Math.sin(clock.getElapsedTime() * orbit)* Dis
        myMesh.current.rotation.y += 0.02;

        const NeptunePosition = myMesh.current.position

        const targetCamera = new THREE.Vector3(
          NeptunePosition.y + 4,
          NeptunePosition.x + .5,
          NeptunePosition.z + -1 )
          
          
          if(followCamera ){
            camera.lookAt(NeptunePosition)
            camera.position.copy(targetCamera)
          } 

      });

      useEffect(()=>{
        document.body.style.cursor = hover ? 'pointer':'auto'
      },[hover])
    
  return (
    <>
   
    <mesh ref ={myMesh}
       onClick={followNeptune}
       onPointerOver={()=>setHover(true)}
       onPointerOut={()=>setHover(false)}
    >
        <sphereGeometry args={[1.3,32,32]}/>
        <meshStandardMaterial map  ={colorMap}
         emissive={0xffffff}
         emissiveIntensity={ hover ? 1 : 0}
        />
    </mesh>
    </>
  )
}


export default Neptune