 import React from "react";
 import "./style.css"
 

 export default function CarteRobot({robot}) {
   return (
     <div className="list-robots">
       <div className="robot-avatar">
         <img alt={robot.name} src={`https://robohash.org/${robot.id}`}/>
       </div>
       <div className="robot-info">
         <p className="name"> {robot.name} </p>
         <p className="email">{robot.email}</p>
       </div>
     </div>
   );
 }
