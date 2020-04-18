import "./index.scss"
import React from "react"
import Photo from "./photo"

const Navbar = () => {

    return (
        <header>
            <span className="responsive-close">
                <i className="fas fa-times"></i>
            </span>
            <div className="profile">
                <Photo/>
                <h2>Juan Sánchez</h2>
            </div>
            <nav>
                <ul>
                    <li><a href="#about_me">About Me</a></li>
                    <li><a href="#skills">Skills</a></li>
                </ul>
            </nav>
        </header>
    );
}


export default Navbar 