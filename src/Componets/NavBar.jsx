import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import solarSystem from '../solarMap/solarSystem'
import Home from './Home'
import Donation from './Donation'

function NavBar() {
  return (
    <>
     <nav className ="top-nav" >
            <div className ="logo">Logo</div>
            <ul className ="navStuff">
                <li>
                <Link  to= '/'  className="navList">Home</Link>
                </li>
                <li>
                <Link to= '/solarmodel'  className="navList" >Solar Model </Link>
                </li>
                <li>
                <Link to='/donation'  className="navList" > Donation</Link>
                </li>
                
            </ul>
        </nav>
    
  
    <Link to='other' ></Link>
    
    <Routes>
    <Route path='/' Component={Home}></Route>
    <Route path='/solarmodel' Component={solarSystem}></Route>
    <Route path='/donation'Component={Donation} ></Route>
    </Routes>


    </>
  )
}

export default NavBar