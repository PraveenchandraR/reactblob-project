import React from "react";
import NewFile from "./newfile";
import Head from "../../Components/HeaderComponent/Head";

import IndianRight from "./IndianRight";


function IndianCinema() {
 

    return (
        <div className="india">

            <Head />
                <h2>Indian Cinema</h2>
            <hr></hr>
            <div className="Templet">
                <div className="left"   ><NewFile /></div>
            
            <div className="righttemplet"><IndianRight /></div>
            </div>
            <br></br>
            <hr></hr>
            <footer> <pre>--React Blob Project
              @Rights reserved by Praveen Chandra Ravuri
                                       Prepbytes Coaching Acedamy --
            </pre></footer>
        </div>
    );
}
export default IndianCinema;