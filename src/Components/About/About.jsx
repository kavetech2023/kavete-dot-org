import React from 'react'
import './About.css'
import { FaRegCirclePlay } from "react-icons/fa6";

const About = ({setPlayVideo}) => {
  return (
    <div className='about'>
        <div className="about-left">
        <img src="https://via.placeholder.com/450" className="about-img"/>
        <span className="play-icon" onClick={()=>{setPlayVideo(true)}}><FaRegCirclePlay size={50}/></span>
        </div>
        <div className="about-right">
            <h2>Nurturing Tomorrow's leaders today!</h2>
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
    </div>
  )
}

export default About