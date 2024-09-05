// import './Carousel.css'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import React from 'react';
// import Slider from 'react-slick';
// import news1 from "../../assets/ring-images/ring-category-cover.jpg";
// import news2 from "../../assets/pearls.jpg";

// const news =[
// news1, news2,
// ]


// function Carousel() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 5000, // Change slide every 3 seconds
//     };
  
//     return (
//       <div className="carousel">
//         <Slider {...settings}>
//           {news.map((image, index) => (
//             <div key={index}>
//               <img src={image} alt={`Slide ${index + 1}`} />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     );
//   }
  
//   export default Carousel;

import React from "react";
import news1 from "../../assets/ring-images/ring-category-cover.jpg";
import news2 from "../../assets/pearls.jpg";
import {ImageSlider} from "../carousel-new/ImageSlider.tsx";

const IMAGES = [
  { url: news1, alt: "News One" },
  { url: news2, alt: "News Two" },
]

function Carousel() {
  return (
    <div
      style={{
        maxWidth: "1550px",
        width: "100%",
        maxHeight: "400px",
        height: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
      {/* <a href="/" style={{ fontSize: "4rem" }}>
        Link
      </a> */}
    </div>
  )
}

export default Carousel;