import React, { useEffect } from "react";
import Head from "../../Components/HeaderComponent/Head";
import AnimeLeft from "./AnimeLeft";

import AnimeRight from "./AnimeRight";


const Anime = () => {
      useEffect(() => {
     fetch("http://localhost:3002/indiancinema").then((res)=>res.json()).then((res)=>console.log(res))
 })
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
             <footer> <span>--React Blob Project
              @Rights reserved by Praveen Chandra Ravuri
             Prepbytes Coaching Acedamy --
            </span></footer>
      
        </>
    )
}
export default Anime;