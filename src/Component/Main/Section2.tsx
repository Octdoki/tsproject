import React from "react";
import Paris_main from "../../Img/Paris_main.jpeg"
import Rome_main from "../../Img/Rome_main.jpeg"
import Swiss_main from "../../Img/Swiss_main.jpeg"
import Singapore_main from  "../../Img/Sigapore_main.jpeg"
import { NavLink,Link } from "react-router-dom";
import FirstButton from "./FirstButton";

export default function Section2(){
    return(
        <div className="Container">
            <h3>Choose the cites you like</h3>
            <div className="w3-row-padding w3-text-white w3-large">
                <div className="w3-half w3-margin-bottom">
                    <div className="w3-display-container">
                        <Link to={"/Paris"}>
                         <img src={Paris_main} alt="Paris"></img>
                         <span className="w3-display-bottomleft w3-padding">Paris</span>   
                        </Link>
                        
                    </div>
                </div>
                <div className="w3-half w3-margin-bottom">
                    <div className="w3-display-container">
                        <Link to={"/Italy"}>
                            <img src={Rome_main}  alt="Italy" ></img>
                         <span className="w3-display-bottomleft w3-padding">Italy</span>
                        </Link>
                        
                    </div>
                </div>
                <div className="w3-half w3-margin-bottom">
                    <div className="w3-display-container">
                        <Link to={"Italy"}>
                             <img src={Swiss_main} alt="Swiss"></img>
                         <span className="w3-display-bottomleft w3-padding">Swiss</span>
                        </Link>            
                    </div>
                </div>
                <div className="w3-half w3-margin-bottom">
                    <div className="w3-display-container">
                        <Link to={"Italy"}>
                             <img src="/w3images/cinqueterre.jpg" alt="Fukuoka"></img>
                         <span className="w3-display-bottomleft w3-padding">Fukuoka</span>
                        </Link>
                       
                    </div>
                </div>
                <div className="w3-half w3-margin-bottom">
                    <div className="w3-display-container">
                        <Link to={"Italy"}>
                              <img src={Singapore_main} alt="Singapore"></img>
                         <span className="w3-display-bottomleft w3-padding">Singapore</span>
                        </Link>
                      
                    </div>
                </div>

            </div>
        </div>
        
    )

}