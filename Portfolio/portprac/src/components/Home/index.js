import React from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
        <div className="text-zone">
            <h1>Hi, <br/> I'm Rovin
            <img src ={LogoTitle} alt = "developer"/>
            oriano
            <br/>
            web developer
            </h1>
            <h2>Frontend Developer/ Javascript Expert / Handsome</h2>
            <Link to= "/contact" className = 'flat-button'>CONTACT ME</Link>
        </div>
    </div>
  )
}

export default Home


