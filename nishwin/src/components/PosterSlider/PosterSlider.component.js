import React from "react";
import Poster from "../Poster/Poster.component";

import settings from "../../config/PosterCarousal.config";
import Slider from "react-slick";
const PosterSlider = (props) =>{
    return(
    <>
     
            <h2 className={`text-2xl  py-8 font-bold ${
                props.isDark ? "text-white" : "text-gray-800"
            }`
        }>{props.title}</h2>
            <p className="text-white text-sm ">{props.subtitle}</p>
        
        <Slider {...settings}>
            {props.images.map((image)=>(
            <Poster {...image} isDark={props.isDark}/>

            ))}
        </Slider>
    
    
    </>
    )
}
export default PosterSlider;