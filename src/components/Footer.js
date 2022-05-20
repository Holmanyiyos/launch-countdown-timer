import React from "react";
import Facebook from "../assets/icon-facebook.svg"
import Pinterest from "../assets/icon-pinterest.svg"
import Instagram from "../assets/icon-instagram.svg"



const Footer = ()=>{
    return(
        <footer className="footer">
            <img src={Facebook} alt="Facebook" />
            <img src={Pinterest} alt="Pinterest" />
            <img src={Instagram} alt="Instagram" />

        </footer>
    )
}

export default Footer