import React, { useEffect, useState, createContext } from 'react'
import { useLoader, useFrame, Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three'
import Jupitertexter from '../../Texters/Jupiter2.webp'
import { Stars } from '@react-three/drei'
import './CardStyle.css'
import Jupiter from '../../solarMap/Jupiter'

export const PlanesFind = createContext()

function JupiterCard() {
    
    const [find,setFind] = useState(false)
    
   const findToggle= ()=>{
    if(!find){
       setFind(true) 
    }else{
        setFind(false)
    }
   }

    return (
        <div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">

                    </div>
                    <div className="flip-card-back">
                       
                    <button onClick={findToggle}>Find</button>
                    <div className='plantDiv'>
                        < PlanesFind.Provider value={find}>
                        <Canvas >
                        <OrbitControls/>
                        <pointLight intensity={5000}/>
                        <Jupiter/>
                        < Stars />
                        </Canvas>
                        </PlanesFind.Provider>
                    </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default JupiterCard