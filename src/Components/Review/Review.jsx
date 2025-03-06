import { useState, useEffect } from "react";
import './Review.css'
const reviews = [
    { img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp", name: "Anna Deynah", role: "UX Designer", text: "Great experience, would definitely recommend!" },
    { img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp", name: "John Doe", role: "Web Developer", text: "Amazing service and support!" },
    { img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp", name: "Maria Kate", role: "Photographer", text: "Couldn't be happier with the results." },
    { img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp", name: "John Smith", role: "UX Designer", text: "Highly professional and great work!" },
    { img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp", name: "Alex Rey", role: "Web Developer", text: "Superb attention to detail!" },
    { img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp", name: "Maria Kate", role: "Photographer", text: "My expectations were exceeded!" }
  ];
  
const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  function getItemsPerPage() {
    if (window.innerWidth < 480) return 1; // Mobile: Show 1 review
    if (window.innerWidth < 768) return 2; // Tablet: Show 2 reviews
    return 3; // Desktop: Show 3 reviews
  }

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + itemsPerPage < reviews.length ? prevIndex + itemsPerPage : 0
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [itemsPerPage]);
    
  return (
    <div className='main-container'>
        <div className="container mt-5">
      <h2 className="text-center mb-4 title">What Our<span> Users Say</span> </h2>
      <div className="review-container">
        {reviews.slice(currentIndex, currentIndex + itemsPerPage).map((review, index) => (
          <div key={index} className="review-card">
            <img src={review.img} alt="avatar" />
            <h5>{review.name}</h5>
            <p className="name"><strong>{review.role}</strong></p>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
      
    </div>
  )
}

export default Review
