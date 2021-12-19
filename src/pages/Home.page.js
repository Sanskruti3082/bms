import React from "react";

//components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component.js";
import Premier from "../components/Premier/Premier.component";
const HomePage =() => {
  return (
    <>
    <div className="container mx-auto px-32">
    <h1 className="text-2xl font-bold text-gray-900 my-3">
    The best of Entertainment
    </h1 >
     <EntertainmentCardSlider />
     <Premier />
     </div>
    </>
  );
};

export default HomePage;
