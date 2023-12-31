import React from "react";
import {SiBookmyshow} from "react-icons/si"
import MovieHero from "../components/MovieHero/MovieHero.component";
const Movie = () =>{
     return (
        <>
        <MovieHero/>
        <div className="my-12 container mx-auto px-4 lg:w-1/2 lg:ml-64">
                <div className="flex flex-col items-start gap-3">
                <h2 className="font-bold text-2xl text-gray-800">About the movie</h2>
                <p>Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.</p>
                </div>
<div className="my-8">
        <hr/>
</div>

<div>
        <h1 className="font-semibold py-1">Applicable Offers</h1>
        <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-2 border-dashed rounded-md p-3 w-96 sm:w-60">      
        <SiBookmyshow className="text-6xl text-red-600"/>
<div className="flex flex-col items-start">
        <h3 className="text-gray-900 text-lg"> Flimy Pass</h3>
        <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Flimy Pass @Rs.99</p>
</div>
</div>
        </div>



        </div>
        </>
     );
};
export default Movie;