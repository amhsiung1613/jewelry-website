// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Carousel from '../../components/Carousel/Carousel';
// import App from "../components/carousel-new/App";
import React from 'react';
import "./Home.css";

function Home() {
  
  return (
    <>
      {/* <h2>Latest News</h2> */}
      <div>
        <Carousel />
      </div>
      <div className="reviews">
        
      </div>
    </>
  )
}

export default Home
