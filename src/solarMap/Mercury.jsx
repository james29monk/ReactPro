import React, {useEffect,useState} from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import Mercurytexter from '../Texters/8k_mercury.jpg'
import * as THREE from 'three'


const Mercury = React.memo(() => {

  const colorMap = useLoader(TextureLoader, Mercurytexter )
  const [hover,setHover ] =useState(false)
  const myMesh = React.useRef();
  const Dis = 7
  const [orbit,setOrbit] = useState( 0.4787)
  const [followCamera,setFollowcamera]=useState(false)
  const [orbitOff, setOrbitoff] = useState(false)
  

  const followMercury = ()=>{
    setFollowcamera((preFollowCamera)=>!preFollowCamera)
    setOrbitoff((preOrbitOff)=>!preOrbitOff)
    
  
    if(!orbitOff ){
      setOrbit(0)
    }else {
      setOrbit(0.4787)
    }
  }

  useFrame(({clock, camera}) => {
    myMesh.current.position.z = Math.cos(clock.getElapsedTime() * orbit)* Dis
    myMesh.current.position.x = Math.sin(clock.getElapsedTime() * orbit)* Dis
    myMesh.current.rotation.y += 0.01;


    const MercuryPosition = myMesh.current.position


    const targetCamera = new THREE.Vector3(
      MercuryPosition.y + 1,
      MercuryPosition.x + .5,
      MercuryPosition.z + -1 )
      
      
      if(followCamera ){
        camera.lookAt(MercuryPosition)
        camera.position.copy(targetCamera)
      } 
  });
    
  useEffect(()=>{
    document.body.style.cursor = hover ? 'pointer':'auto'
  },[hover])

  return (
    <>
    <mesh ref ={myMesh}
    onClick={followMercury}
    onPointerOver={()=>setHover(true)}
    onPointerOut={()=>setHover(false)}
    >
        <sphereGeometry args={[0.4,32,32]} />
        <meshStandardMaterial 
        map ={colorMap}
        emissive={0xffffff}
        emissiveIntensity={ hover ? 1 : 0}
        />
    </mesh>
    </>
  )
})


export default Mercury


