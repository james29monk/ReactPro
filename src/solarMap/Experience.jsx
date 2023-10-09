// import React, {useEffect, useState, useContext} from 'react'
// import * as THREE from 'three'
// import { useLoader, useFrame , useThree} from '@react-three/fiber'
// import { TextureLoader } from 'three'
// import Earthtexter from '../Texters/earthmap.jpg'
// import NightEarth from '../Texters/nightEarth .jpeg'


// function Earth() {
//   const colorMap = useLoader(TextureLoader, Earthtexter )
//   const nightMap = useLoader(TextureLoader, NightEarth)
//   const [hover,setHover ] =useState(false)
//   const [followCamera,setFollowcamera]=useState(false)
//   const myMesh = React.useRef();
//   const Dis = 6
//   const OrbitSpeed = 0.02978
  
//    const followEarth = ()=>{
//     setFollowcamera((preFollowCamera)=>!preFollowCamera)
//    }
  
//   useEffect(()=>{
//     document.body.style.cursor = hover ? 'pointer':'auto'
//   },[hover])


//       useFrame(({clock, camera }) => {
//         myMesh.current.position.z = Math.cos(clock.getElapsedTime() * OrbitSpeed)* Dis
//         myMesh.current.position.x = Math.sin(clock.getElapsedTime() * OrbitSpeed)* Dis
//         myMesh.current.rotation.y += 0.01;

//         const earthPosition = myMesh.current.position
        
//         const targetCamera = new THREE.Vector3(
//           earthPosition.y + 5,
//           earthPosition.x + 5 ,
//           earthPosition.z + 5 )

//            const OriginalCameraPosition = new THREE.Vector3(10,11,14)
//            const OriginalTargetCamera = new THREE.Vector3(5,5,5)
          
//           if(followCamera){
//             camera.lookAt(earthPosition)
//             camera.position.copy(targetCamera)
//           } else {
              
//           }
          
          
//         });


    



    
//   return (
//     <>
    
//     <mesh ref ={myMesh}rotation={[0,5,0]}
//      onClick={followEarth}
//      onPointerOver={()=>setHover(true)}
//      onPointerOut={()=>setHover(false)}
//      >
//         <sphereGeometry args={[1,32,32]} />
//         <meshStandardMaterial
//          map  ={colorMap}
//          emissiveMap={nightMap}
//          emissive={0xffffff}
//          emissiveIntensity={ hover ? 20 : 0}
//          />
//     </mesh>
//     </>
//   )
// }


// export default Earth





// import React  from 'react'
// import './App.css'
// import { Stars } from '@react-three/drei'
// import CameraPosition from './Functions/CameraPosition'
// import Sun from './Componets/Sun'
// import Earth from './Componets/Earth'
// import Mercury from './Componets/Mercury'
// import Venus from './Componets/Venus'
// import Mars from './Componets/Mars'
// import Jupiter from './Componets/Jupiter'
// import Saturn from './Componets/Saturn'
// import Uranus from './Componets/Uranus'
// import Neptune from './Componets/Neptune'
// function App() {

//   return (
//     <>
  
//    <CameraPosition event='mousedown'/>
//    <color attach='background' args={['black']}/>
//    <pointLight intensity={5000}/>
//    <Sun />
//    <Mercury />
//    <Venus />
//    <Earth />
//    <Mars />
//    <Jupiter />
//    <Saturn />
//    <Uranus />
//    <Neptune />
//    <Stars />
   
//     </>
//   )
// }

// export default App
