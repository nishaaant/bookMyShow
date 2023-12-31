import PlaysFilter from "../components/PlaysFilter/PlaysFilter.Component";



import React, { useEffect, useState } from "react";


import axios from "axios";
import ImageGrid from "../components/PosterSlider/Movie.maybenotslider";

const Plays = () => {
    return (
<>
      <h1>Image Gallery</h1>
      
                   
           <div className=" hidden xl:block lg:w-1/4 ml-20 rounded-sm mt-16">
                <h1 className="text-4xl  font-semibold rounded-sm -ml-12 mb-16">Filters</h1>
                <div>

                    <div className="container items-center border-gray-400 border border-solid rounded-2xl bg-white mb-3 mt-4">
                        <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
                    </div>

                    <div className="container items-center border-gray-400 border border-solid rounded-2xl bg-white mb-3 mt-4">
                        <PlaysFilter title="Languages" subtitle="clear" tags={["Hindi", "English", "Urdu", "Punjabi"]} />
                    </div>

                    <div className="container items-center border-gray-400 border border-solid rounded-2xl bg-white mb-3 mt-4">

                        <PlaysFilter title="Genres" tags={["Drama", "Comedy", "Adaptation", "Musical", " Classical", "Romantic", "Tragedy", "Fantasy", "Historical"]} />
                    </div>



                </div>
            </div>
        </>
    );



};
export default Plays;