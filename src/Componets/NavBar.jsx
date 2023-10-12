import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import solarSystem from '../solarMap/solarSystem'
import Home from './Home'

function NavBar() {
  return (
    <>
     <nav className ="top-nav" >
            <div className ="logo">space & Time</div>
            <ul className ="navStuff">
                <li>
                <Link  to= '/'  className="navList">Home</Link>
                </li>
                <li>
                <Link to= '/solarmodel'  className="navList" >Solar Model </Link>
                </li>  
            </ul>
        </nav>
    
  
    <Link to='other' ></Link>
    
    <Routes>
    <Route path='/' Component={Home}></Route>
    <Route path='/solarmodel' Component={solarSystem}></Route>
    </Routes>


    </>
  )
}

export default NavBar