import React, {useEffect,useState} from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import Uranustexter from '../Texters/Uranus.jpeg'
import * as THREE from 'three'


function Uranus() {
    const colorMap = useLoader(TextureLoader, Uranustexter )
    const [hover,setHover ] =useState(false)
    const myMesh = React.useRef();
    const Dis = 34
    const [orbit,setOrbit] = useState(0.0681)
    const [followCamera,setFollowcamera]=useState(false)
    const [orbitOff, setOrbitoff] = useState(false)
  
    const followUranus = ()=>{
      setFollowcamera((preFollowCamera)=>!preFollowCamera)
      setOrbitoff((preOrbitOff)=>!preOrbitOff)
      
    
      if(!orbitOff ){
        setOrbit(0)
      }else {
        setOrbit(0.0681)
      }
    }




    useFrame(({clock, camera}) => {
      myMesh.current.position.z = Math.cos(clock.getElapsedTime() * orbit)* Dis
      myMesh.current.position.x = Math.sin(clock.getElapsedTime() * orbit)* Dis
      myMesh.current.rotation.y += 0.01;

      const UranusPosition = myMesh.current.position

        const targetCamera = new THREE.Vector3(
          UranusPosition.y + 3,
          UranusPosition.x + .5,
          UranusPosition.z + -1 )
          
          
          if(followCamera ){
            camera.lookAt(UranusPosition)
            camera.position.copy(targetCamera)
          } 
    });

    useEffect(()=>{
      document.body.style.cursor = hover ? 'pointer':'auto'
    },[hover])
    


  return (
    <>
   
    <mesh ref ={myMesh}
    onClick={followUranus}
    onPointerOver={()=>setHover(true)}
    onPointerOut={()=>setHover(false)}
    >
        <sphereGeometry args={[1.4,32,32]}/>
        <meshStandardMaterial 
        map  ={colorMap}
        emissive={0xffffff}
         emissiveIntensity={ hover ? 1 : 0}
        />
    </mesh>
    </>
  )
}


export default Uranus