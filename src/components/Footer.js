import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
   return (
      <div className="footer-info">
         <a
            href="https://github.com/AxlNunez/portfolio-site"
            target="_blank"
            rel="noreferrer"
            className="fancy-link line-height-175"
         >
            Designed and built with <FaHeart /> by Axl Nuñez
         </a>
      </div>
   );
}
