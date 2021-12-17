import React from "react";
import HeroSlider from "react-slick";

//components
import {PrevArrow, NextArrow} from "./Arrows.component";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
  const settings = {
    arrows: true,
    centerMode: true,
    centerPadding: "160px",
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   prevArrow: <PrevArrow />,
   nextArrow: <NextArrow />
 };
const images = ["https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
"https://images.unsplash.com/photo-1639636669766-4bbd6607239f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
"https://images.unsplash.com/photo-1639610778379-2ee7856f422d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
"https://images.unsplash.com/photo-1639534378945-19b22573681e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
"https://images.unsplash.com/photo-1639502022187-9a4afb389e5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
"https://images.unsplash.com/photo-1639562954961-0aa228b27c62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
];
   return (
     <>
     <HeroSlider {...settings}>
     {images.map((image)=>(
       <div className="w-20 h-96 px-2 py-3">
          <img src={image} alt="test-img" className="rounded-md w-full h-full"/>
       </div>
     ))}
     </HeroSlider>
     </>
   )
};

export default HeroCarousal;
