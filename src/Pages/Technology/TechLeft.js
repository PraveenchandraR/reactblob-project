import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataBlog } from "../../DataContext/ObjectData";
import "../PageTemplet/page.css";
function TechLeft() {
    const [dataValue] = useContext(DataBlog)
    const Nav = useNavigate();
    const handleNav = (id,item) => {
        Nav(`/accessdata/${id}`,{state:{details:item}})
    }
    return (
        <> <div >


        {
                        dataValue.filter((item)=> item.category==="technology").map((item,index) => {
                          
                            return (
                                <>
                                   <div id='item.id' >
                                    <div  className="leftchild" key={index} onClick={()=>handleNav(item.id,item)}>
                                            <div><img className="image" src={item.image} alt=""></img> </div> 
                                                <div className="lefttext">
                                                <span >{item.title}</span><p className="para">{ item.Description}</p>
                                                </div>
                                    
                                           
                                            
                                        </div>
                                    </div>
                           
                                </>
                           
                               
                            );
                        })
                       
                        
                    }
        
        </div></>
       
    );
}
export default TechLeft;