import React from 'react'
import './Hero.css'
import { FaRegCaretSquareRight } from "react-icons/fa";


const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Jobs for Africa.</h1>
            <p>Our cutting edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
            <input type="text" className='btn' placeholder="Search for Job" />
            <button className="btn">Explore more <span><FaRegCaretSquareRight /></span> </button>
        </div>
    </div>
  )
}

export default Hero