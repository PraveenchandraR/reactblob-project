import React, { useEffect } from "react";
import Head from "../../Components/HeaderComponent/Head";

import "../PageTemplet/page.css";
import '../../Utility/style.css';

import HollyLeft from "./HollyLeft";
import HollyRight from "./HollyRight";


const Hollywood = () => {
    useEffect(() => {
        fetch("https://reactblobbackend.onrender.com/hollywood").then((res)=>res.json()).then((res)=>console.log(res))
    })
    return (
        <>
            <div className="hollywood">
               <Head />
                <h2>Hollywood</h2>
                <hr></hr>
                     <div className="Templet">
            <div className="left"><HollyLeft /></div>
            
            <div className="righttemplet"><HollyRight /></div>
                </div>
              
                 <hr></hr>
                    <footer> <span>--React Blob Project
                             @Rights reserved by Praveen Chandra Ravuri
                                       prepbytes Coaching Acedamy --
            </span></footer>
            </div>
            
        
        </>
    )
}
export default Hollywood;