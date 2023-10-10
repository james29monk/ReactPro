import { useEffect, useState, createContext } from "react"
import React from 'react'
import MercuryCard from "./Cards/MercuryCard"
import VenusCard from "./Cards/VenusCard"
import EarthCard from "./Cards/Earthcard"
import MarsCard from "./Cards/MarsCard"
import JupiterCard from "./Cards/JupiterCard"
import SaturnCard from "./Cards/SaturnCard"
import UranusCard from "./Cards/UranusCard"
import NeptuneCard from "./Cards/NeptuneCard"


export const PlanetContext = createContext()


import '../App.css'

function Home() {
    const [planet, setPlanet] = useState([])
    const [planetImg, setPlanetImg] = useState('')


    useEffect(() => {
        const planetData = async () => {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '16acfce3c0mshefe4b63ec42c210p1d4e9ejsn683bd5c7c3b2',
                    'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
                }
            };

            try {
                let response = await fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/', options);
                if (response.ok) {
                    let data = await response.json();
                    setPlanet(data);
                    console.log(data);
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        planetData();
    }, []);










//     const planetinfo = planet.map((planet) => {
//         const { name, description } = planet
//         return
//     })
//   console.log(planetinfo[0].name)



    //helps with education 
    // Total number of professional astrologers in the U.S.	is 7000
    // projected to grow 5 percent from 2022 to 2032



    return (
        <div>
            <PlanetContext.Provider value={planet}>
                <div className="headerDiv">
                    <h1>Space And Time</h1>
                    <p>Gain an understanding of our Solar system with this interactive website</p>

                </div>
                <div className="mainDiv">
                    <div className="mercuryDiv">
                        < MercuryCard />
                    </div>

                    <div className="venusDiv">
                        < VenusCard />
                    </div>

                    <div className="earthDiv">
                        <EarthCard />

                    </div>
                         <MarsCard />
                    <div className="marsDiv">

                    </div>

                    <div className="jupiterDiv">
                        <JupiterCard />
                    </div>

                    <div className="saturnDiv">
                        <SaturnCard />
                    </div>

                    <div className="uranusDiv">
                        <UranusCard/>
                    </div>

                    <div className="neptuneDiv">
                         <NeptuneCard/>
                    </div>
                </div>
            </PlanetContext.Provider>
        </div>
    )
}


export default Home