import React, {useEffect, useState, useContext} from 'react'
import { useLoader, useFrame} from '@react-three/fiber'
import { TextureLoader } from 'three'
import BoxImg from '../Texters/bmc_qr.png'
import { Rotation } from '../Componets/Donation'


const Experience = React.memo(() =>{
  const [rotatin, setRotation] =useContext(Rotation)
    const myMesh = React.useRef();
    const colorMap = useLoader(TextureLoader, BoxImg)
    const [hover,setHover ] =useState(false)
    const [rotSpeed,setRotSpeed] = useState(0.01)

  const clickFunc =()=>{
    setRotation(true)
    if(rotatin){
      setRotation(false)
    }
  }
    useEffect(()=>{
        document.body.style.cursor = hover ? 'pointer':'auto'
      },[hover])

    useFrame(() => {
    myMesh.current.rotation.y += rotSpeed
    myMesh.current.rotation.x += rotSpeed
    if(rotatin){
      setRotSpeed(0)
    }
    else{
      setRotSpeed(0.01)
    }
      });
      
  return (
    <>
    <mesh ref={myMesh} 
    onClick={clickFunc}
    onPointerOver={()=>setHover(true)}
    onPointerOut={()=>setHover(false)}
    > 
      <boxGeometry   args={[1, 1, 1]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
    </>
  )
})

export default Experience
