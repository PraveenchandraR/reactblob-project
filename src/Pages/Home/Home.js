import React, { useContext } from "react";
import Head from "../../Components/HeaderComponent/Head";
import { DataBlog } from "../../DataContext/ObjectData";
import "./homestyle.css";

const Home = () => {
  const [dataValue] = useContext(DataBlog);

    return (
        <>
            <div>
                 <Head />
                <h1>Home</h1>
         <div className="home">
                      <div className="homeright">
                        
                        <div className="rigth">
                            MOUNTAINS
                            
                        </div>
                          <br></br>
                 <div className="right2">
                               GREENARY
                        </div>
                    </div>
                    <div className="hometop">
                      ADVENTURE
                 </div>
                  
                   <br></br>
                     <hr></hr>
            <div className="homedown"> 
                       
                         <span className="latesttext">The Latest</span>
                              <hr></hr>
            <div className="latest">
             
                {
                  dataValue?.filter((item) => item.category === "anime").map((item,index) => {
                    return (
                      
                      <>
                        <div key={index} className="latestslide">
                            <div className="latestbox">
                          
                            <span>{ item.title}</span>
                            <img className="image" src={item.image} alt=""></img>
                          </div>

                        </div></>
                    )


                  })
                    }
              </div>
                      <span className="articletext">Latest Article</span><br></br>
                       <hr ></hr>
              <div className="articles">
                             {
                           dataValue?.filter((item) => item.category === "indianCinema").map((item,index) => {
                           return (
                      
                               <>
                        <div key={index} className="articleslide">
                      
                            <span style={{color:"#e91e63"}}>{ item.title}</span> 
                            <div className="articlebox">
                          
                         
                            <img className="articleimage" src={item.image} alt=""></img>
                            <div> <h5>Description</h5>
                              <p style={{color:"gray"}}>{item.Description}</p><br></br>
                              <hr></hr></div>
 
                            </div>

                        </div>
                            </>
                             )


                           })
                          }
                    </div>
        
                     <div className="add">Advertisement</div>
                  </div>
            </div>
          <div>
            <h2>Latest Stories</h2>
            <div className="stories">
              {dataValue.filter((item) => item.category === "technology").map((item,index) => {
                return (
               <div key={index} className="storyslide">
                            <div className="latestbox storybox">
                          
                            <span>{ item.title}</span>
                        <img className="image" src={item.image} alt=""></img>
                        </div>
                          </div>
                    
                
                )
              })}
            </div>
            <br></br>
            <hr></hr>
            <footer> <pre>--React Blob Project
              @Rights reserved by Praveen Chandra Ravuri
                                       Prepbytes Coaching Acedamy --
            </pre></footer>
                 </div>
        </div>
        </>
    )
}
export default Home;