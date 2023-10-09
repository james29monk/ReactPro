import {useThree} from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import React from 'react'

function CameraPosition({event}) {
    const { camera }= useThree()
    const cameraRef = useRef()


    useEffect(() => {

const logCameraPosition = () => {
    const { x, y, z } = cameraRef.current.position
    const roundX = Math.round(x*100) /100
    const roundY = Math.round(y*100) /100
    const roundZ = Math.round(z*100) /100
    console.log(`x:${roundX} y:${roundY} z:${roundZ}`)
}
cameraRef.current = camera
window.addEventListener(event, logCameraPosition)

return () => {
    window.removeEventListener(event, logCameraPosition)
}
},[])


  return null
}

export default CameraPosition