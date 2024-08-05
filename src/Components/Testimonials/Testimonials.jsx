import React, {useRef} from 'react'
import './Testimonials.css'
import { GrNext } from 'react-icons/gr'
import { IoChevronBackSharp } from "react-icons/io5";

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
{/* Slide Foward function start*/}
const slideFoward = () => {
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

}

{/* Slide Backward start*/}

const slideBackward = () => {
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
        <span className='next-btn' onClick={slideFoward}><GrNext/> </span>
        <span className='back-btn' onClick={slideBackward}><IoChevronBackSharp /></span>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="https://placehold.co/200" alt="" />
                            <div>
                                <h3>John Doe</h3>
                                <span>CEO, Company</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="https://placehold.co/200" alt="" />
                            <div>
                                <h3>John Doe</h3>
                                <span>CEO, Company</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="https://placehold.co/200" alt="" />
                            <div>
                                <h3>John Doe</h3>
                                <span>CEO, Company</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="https://placehold.co/200" alt="" />
                            <div>
                                <h3>John Doe</h3>
                                <span>CEO, Company</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials