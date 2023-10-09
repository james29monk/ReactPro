import { useEffect, useState } from "react"
import React from 'react'
import EarthCard from "./Cards/Earthcard"
import JupiterCard from "./Cards/JupiterCard"

import '../App.css'

function Home() {
    const [planet, setPlanet] = useState([])
    const [planetImg, setPlanetImg] = useState('')


    const planetData = async () => {


        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '16acfce3c0mshefe4b63ec42c210p1d4e9ejsn683bd5c7c3b2',
                'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
            }
        }

        let response = await fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/', options)
        let data = await response.json()
        setPlanet(data)
        console.log(data)

    }



    
//  const nasaImgData = async () =>{
    
//     const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=gLvuUNDbADmuFJpiEees8Yi6gKJWj2pij1VfdANR')
//     const nasaImg = await response.blob();
//     const imageObjectURL = URL.createObjectURL(nasaImg);
//     setPlanetImg(imageObjectURL)
//     // console.log(nasaImg.url)
// }

//     useEffect(() => {
//         planetData()
//         nasaImgData()
//     }, [])


   







    const planetinfo = planet.map((planet) => {
        const { name, description } = planet
        return
    })

    //helps with education 
    // Total number of professional astrologers in the U.S.	is 7000
    // projected to grow 5 percent from 2022 to 2032



    return (
        <div>
            <div className="headerDiv">
            <h1>Space And Time</h1>
            <p>Gain an understanding of our Solar system with this interactive website</p>
          
            </div>
            <div className="mercuryDiv">
             {/* <EarthCard />    */}
            </div>

            <div className="venusDiv">
            <JupiterCard />
            </div>

            <div className="earthDiv">

            </div>

            <div className="marsDiv">

            </div>

            <div className="jupiterDiv">

            </div>

            <div className="saturnDiv">

            </div>

            <div className="uranusDiv">

            </div>

            <div className="neptuneDiv">

            </div>

        </div>
    )
}


export default Home