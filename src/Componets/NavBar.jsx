import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import solarSystem from '../solarMap/solarSystem'
import Home from './Home'
import Donation from './Donation.jsx'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
                <li>
                <Link to= '/Money'  className="navList" >Donate </Link>
                </li>  
            </ul>
    <DropdownButton id="dropdown-item-button" title="🌎">
      <Link to= '/' ><Dropdown.Item as="button">Home</Dropdown.Item></Link>
      <Link to= '/solarmodel' ><Dropdown.Item as="button">Solar Model</Dropdown.Item></Link>
      <Link to= '/Money' ><Dropdown.Item as="button">Donate</Dropdown.Item></Link>
    </DropdownButton>
        </nav>  

    <Routes>
    <Route path='/' Component={Home}></Route>
    <Route path='/solarmodel' Component={solarSystem}></Route>
    <Route path='/Money' Component={Donation}></Route>
    </Routes>
    </>
  )
}

export default NavBar