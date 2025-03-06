import React, { useState, useEffect } from "react";
import './Slider.css'
const Slider = () => {
    
        const images = [
          "https://img.freepik.com/free-vector/gradient-lake-scenery_23-2149151146.jpg",
          "https://i.pinimg.com/736x/a1/e8/47/a1e847e2b7ab79c12e1bf3131b47fb10.jpg",
          "https://images.pexels.com/photos/76964/fighter-jet-f-15-strike-eagle-fighter-aircraft-jet-fighter-76964.jpeg"
        ];
      
        const [index, setIndex] = useState(0);
        let autoSlide;
      
        // Function to update index
        const updateslider = (newIndex) => {
          setIndex((newIndex + images.length) % images.length);
        };
      
        // Next and Previous handlers
        const nextSlide = () => updateslider(index + 1);
        const prevSlide = () => updateslider(index - 1);
      
        // Auto-slide functionality
        useEffect(() => {
          autoSlide = setInterval(() => {
            nextSlide();
          }, 3000);
      
          return () => clearInterval(autoSlide); // Cleanup interval on unmount
        }, [index]);
  return (
  <div className="slider-container">
    {/* Images Container */}
    
    <div className="slider-inner" style={{ transform: `translateX(-${index * 100}%)` }}>
      {images.map((src, i) => (
        <div key={i} className="slider-item">
          <img src={src} alt={`Slide ${i + 1}`} />
        </div>
      ))}
    </div>

    {/* Navigation Controls */}
    <button className="prev" onClick={prevSlide}>&#10094;</button>
    <button className="next" onClick={nextSlide}>&#10095;</button>
  </div>
  )
}

export default Slider
