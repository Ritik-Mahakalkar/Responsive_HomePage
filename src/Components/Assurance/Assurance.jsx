import React from 'react'
import './Assurance.css'
const Assurance = () => {
    const features = [
        { icon: "fas fa-award", text: "Assured Quality" },
        { icon: "fas fa-lightbulb", text: "Always Innovative" },
        { icon: "fas fa-handshake", text: "Trust and Transparency" }
      ];
      
  return (
    <div className='main-container'>
         <section className="stand-out">
      <h2 className="section-title">
        <span className="highlight">What Makes</span> <span className="highlight-green">Us Stand Out?</span>
      </h2>
      <div className="underline"></div>
      <div className="cards">
        {features.map((feature, index) => (
          <div key={index} className="card">
            <i className={feature.icon}></i>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
      
    </div>
  )
}

export default Assurance
