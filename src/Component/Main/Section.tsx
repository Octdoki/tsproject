import main_pic from "../../Img/main_pic.jpeg"
import React from "react"

export default function Section(): JSX.Element{
    return(
      <div className="container">
          <div className="picture">
              <img src={main_pic} alt="main_picture"></img>
          </div>
          <div className="boxContainer">
           <h1>Explore New World </h1>   
          </div>
      </div>
    )
  }
  //ts vs tsx