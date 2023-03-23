import React, { useState } from "react";
import Resume from "../assets/AxlNunez-SoftwareEngineer.pdf";

export default function Hero() {
   const [download, setDownload] = useState(false);

   return (
      <section className="hero">
         <div>
            <div className="hero-header">
               <p className="hero-small-heading ">Hi, I'm</p>
               <h1 className="hero-big-heading">Axl Nuñez,</h1>
               <h1 className="hero-big-heading secondry-big-heading">I'm a </h1>
               <p className="hero-desc">
                  My name is Axl Nuñez, I'm a Marine Corps veteran and a student
                  at University of Maryland Global Campus. Currently, I am
                  pursuing a dual degree in Computer Science. Additionally, I am
                  an experienced Full-Stack Software Engineer, I build web
                  applications from the ground up.
               </p>
            </div>
            <button
               className="hero-btn primary-btn"
               onClick={() => setDownload(true)}
            >
               <a href={Resume} download="AxlNunez-Resume">
                  <p>
                     {download
                        ? "Thanks For Your Interest !"
                        : "Download Resume"}
                  </p>
               </a>
            </button>
         </div>
      </section>
   );
}
