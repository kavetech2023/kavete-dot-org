import React from 'react'
import './Campus.css'
import { GrNext } from "react-icons/gr";
import photo_1 from '../../assets/photo_1.jpeg'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={photo_1} alt="" />
            <img src="https://via.placeholder.com/550" alt="" />
            <img src="https://via.placeholder.com/550" alt="" />
            <img src="https://via.placeholder.com/550" alt="" />
        </div>
        <button className='btn dark-btn'>See more here <span><GrNext /></span> </button>
    </div>
  )
}

export default Campus