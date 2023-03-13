import React from "react";
import Head from "../../Components/HeaderComponent/Head";
import AnimeLeft from "./AnimeLeft";

import AnimeRight from "./AnimeRight";


const Anime = () => {
    return (
        <>
            <div className="anime">
                <Head />
                <h2>Anime</h2>
                <hr></hr>
             
                <div className="Templet">
            <div className="left"><AnimeLeft /></div>
            
            <div className="righttemplet"><AnimeRight /></div>
            </div>
            </div>
            <br></br>
            <hr></hr>
            <footer> <pre>--React Blob Project
              @Rights reserved by Praveen Chandra Ravuri
                                       Prepbytes Coaching Acedamy --
            </pre></footer>
      
        </>
    )
}
export default Anime;