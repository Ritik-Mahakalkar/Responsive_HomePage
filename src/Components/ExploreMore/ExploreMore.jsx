import React from 'react'
import './ExploreMore.css'
import { Link } from 'react-router-dom'
const ExploreMore = () => {
  return (
    <div className='explore-main-container'>
          <div className="explore-container">
        
        <div className="explore-image">
            <img src="https://img.freepik.com/free-photo/engineers-are-looking-blueprint-construction-site_1150-18016.jpg" alt="Construction Image"/>
        </div>

        
        <div className="explore-content">
            <h2>Discover<span> More</span></h2>
            <p>Learn more about our construction services, innovative designs, and project excellence. We bring your vision to life with quality and precision.</p>
            <Link to="/about" className="btn">Explore More</Link>
        </div>
    </div>
      
    </div>
  )
}

export default ExploreMore
