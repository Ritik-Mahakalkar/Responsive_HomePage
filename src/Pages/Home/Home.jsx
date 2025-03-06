import React from 'react'
import './Home.css'
import Slider from '../../Components/Slider/Slider'
import ExploreMore from '../../Components/ExploreMore/ExploreMore'
import Assurance from '../../Components/Assurance/Assurance'
import Review from '../../Components/Review/Review'
const Home = () => {
  return (
    <div>
     <Slider/>
     <ExploreMore/>
     <Assurance/>
     <Review/>
      
    </div>
  )
}

export default Home
