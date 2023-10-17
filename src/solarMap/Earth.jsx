import React, {useEffect, useState, useRef} from 'react' 
import * as THREE from 'three' 
import { Text } from '@react-three/drei'
import { useLoader, useFrame } from '@react-three/fiber' 
import { TextureLoader } from 'three'
import Earthtexter from '../Texters/earthmap.jpg'
import NightEarth from '../Texters/nightEarth .jpeg'

function Earth() {
// Lines 11 & 12 loads my Texter using a THREE hook called useLoader 
// useLoader allows you to import items into Canvas 
//This loader Takes 
  const colorMap = useLoader(TextureLoader, Earthtexter)
  const nightMap = useLoader(TextureLoader, NightEarth)
//Lines 15,16 & 17 uses useState to hold my true/falsue values for onclick and onPointerOver functions 
  const [hover,setHover ] = useState(false)
  const [followCamera,setFollowcamera]=useState(false)
  const [orbitOff, setOrbitoff] = useState(false)
//Line 21 I use a useRef hook for my mesh so that when use myMesh or add functionality it won't re-renders the page when I interact with myMesh.
// myMesh is used to add a texter to my objects in the component 
  const myMesh = useRef();
//Line 23 useState is used to control my orbit speed in my useFrame hook
  const [orbit,setOrbit] = useState(0.2978)
//Line 25 controls the distance on the this components orbit
  const Dis = 14
  
   // This function controls the boolean values I use so my camera can follow my earth component  
   const followEarth = ()=>{
    //SetFollowcamera is passed a callback function that toggles the value true and false 
    //takes previous value of followcamera State and switches it to the opposite value 
    //same for orbit State 
    setFollowcamera((preFollowCamera)=>!preFollowCamera)
    setOrbitoff((preOrbitOff)=>!preOrbitOff)
    //Statement stops the orbit of the earth component so that it can be displayed properly   
    if(!orbitOff){
      setOrbit(0)
    }else{
      setOrbit(0.2978)
    }
   }
  
  useEffect(()=>{
    //This code chages the cursor so that my planets look clickable 
    document.body.style.cursor = hover ? 'pointer':'auto'
  },[hover])

    //Here I use a THREE hook called called useFrame witch basicly lets you preform an action
    //ever fram of a animation loop 
      useFrame(({clock, camera }) => {

        //lines 55-57 controls the position of the earth component by 
        //calculating the posistion based a trig function that triangulates the posistion 
        //with sin and cos values 

        myMesh.current.position.z = Math.cos(clock.getElapsedTime() * orbit)* Dis
        myMesh.current.position.x = Math.sin(clock.getElapsedTime() * orbit)* Dis
        myMesh.current.rotation.y += 0.01;
        // This const repersents the current posistion of my object mesh 
        const earthPosition = myMesh.current.position
        
        // this const uses a Vector3 class to stores the coordinates of my camera to use later   
        const targetCamera = new THREE.Vector3(
          earthPosition.y + 2,
          earthPosition.x + 1,
          earthPosition.z + -.5 )

          //line 71 chages the camera value if the followCamera state is true 
          if(followCamera){
            camera.lookAt(earthPosition)
            camera.position.copy(targetCamera)
          }  
        });
  return (
    <>
    <mesh ref ={myMesh}
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
         {followCamera ? (<Text
         scale={.4}
         position={[0,0,1]}
         >Earth</Text>):(null)}
    </mesh>
    </>
  )
}


export default Earth