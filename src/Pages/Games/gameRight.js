import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataBlog } from "../../DataContext/ObjectData";
import "../PageTemplet/page.css";
function GameRight() {
    const [dataValue] = useContext(DataBlog);
    const Nav = useNavigate();
    const handleNav = (id,item) => {
        Nav(`/accessdata/${id}`,{state:{details:item}})
    }
    return (
        
        <>
            <div>
                    <h2 style={{marginTop:"2px"}}>Top Posts</h2>
                {
                    dataValue.filter((item)=> item.category=== 'games').map((item, index) => {
                        return (
                            <>
                           
                                <div  key={item.index}>
                                     
                                    <div  >
                                    
                                        <div className="rightchild" onClick={()=>handleNav(item.id,item)}>
                                            <div><img className="imageright" src={item.image} alt="" />  </div>
                                            <div className="righttext">  <span>{item.title}</span><br></br>
                                            <span className="para">{item.release}</span><br></br>
                                            <span className="para">{item.type}</span></div>
                                           
                                         
                                    
                                        </div>
                                    </div>
                                </div>
                            
                            </>

                         )


                     })
            }
                
            </div>
        </>
    );

}
export default GameRight;