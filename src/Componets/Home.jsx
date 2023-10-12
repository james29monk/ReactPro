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
import '../App.css'

export const PlanetContext = createContext()

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
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        planetData();
    }, []);

    return (
        <div>
            <PlanetContext.Provider value={planet}>
                <div className="headerDiv">
                    <h1>Space And Time</h1>
                    <p>Gain an understanding of our Solar system with this interactive website</p>

                </div>
                <div className="CardIntro" ><h2>Each card will provide you with an image and information about each planet</h2></div>
                <div className="mainDiv">
                        < MercuryCard />
                        < VenusCard />
                        <EarthCard />
                        <MarsCard />
                        <JupiterCard />
                        <SaturnCard />
                        <UranusCard/>
                        <NeptuneCard/>
                </div>
            </PlanetContext.Provider>
        </div>
    )
}


export default Home