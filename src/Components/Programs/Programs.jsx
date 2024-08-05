import React from 'react'
import './Programs.css'
import { IoSchoolSharp } from "react-icons/io5";
import job_1 from '../../assets/job_1.jpeg'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={job_1} alt="" />
        <div className="caption">
            <span><IoSchoolSharp /></span>
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src="https://via.placeholder.com/150" alt="" />
        <div className="caption">
            <span><IoSchoolSharp /></span>
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src="https://via.placeholder.com/150" alt="" />
        <div className="caption">
            <span><IoSchoolSharp /></span>
            <p>Graduation Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
