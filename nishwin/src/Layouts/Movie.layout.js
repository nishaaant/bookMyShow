import React from "react"; 

import MovieNavbar from "../components/Navbar/MovieNavbar.component";
import Footdm from "../components/Footer/footer.Component";

const MovieLayout = (props) => {
return (
    <>
    <MovieNavbar />
    {props.children}
    <Footdm/>
    </>
);
};

export default MovieLayout;
