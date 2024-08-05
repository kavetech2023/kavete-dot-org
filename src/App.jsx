import React,{useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div>
    <Navbar/>
    <Hero/>
    <div className="container">
    <Title subTitle="Our Plan" title="How we give opportunity"/>
    <Programs/>
    <About setPlayVideo={setPlayVideo}/>
    <Title subTitle="Gallery" title="Campus Photos"/>
    <Campus/>
    <Title subTitle="Testimonials" title="What Students Say"/>
    <Testimonials/>
    <Title subTitle="Contact Us" title="Get in Touch"/>
    <Contact/>
    
    <Footer/>
    </div>
    <VideoPlayer playVideo={playVideo} setPlayVideo={setPlayVideo}/>
    </div>
    

  )
}

export default App