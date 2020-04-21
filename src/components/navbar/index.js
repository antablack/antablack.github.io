import "./index.scss"
import React from "react"
import Photo from "./photo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium, faGithubSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faTimes, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { connect, useDispatch } from "react-redux"

const Navbar = ({ isExpanded }) => {
    const dispatch = useDispatch()
    return (
        <header className={isExpanded ? "active" : ""}>
            <span className="responsive-close">
                <FontAwesomeIcon icon={faTimes} onClick={() => dispatch({ type: "TOGGLE_HEADER" })} />
            </span>
            <div className="profile">
                <Photo />
                <h2>Juan Sánchez</h2>
            </div>
            <nav>
                <ul>
                    <li><a href="#about-me">About Me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#portafolio">Portafolio</a></li>
                    <li><a href="#hobby-projects">Hobby Projects</a></li>
                </ul>
            </nav>
            <section>
                <a href="https://medium.com/@jcsanchezv1998" target="_blank">
                    <span><FontAwesomeIcon icon={faMedium} /></span>
                </a>
                <a href="https://github.com/antablack" target="_blank">
                    <span><FontAwesomeIcon icon={faGithubSquare} /></span>
                </a>
                <a href="https://twitter.com/Antablack1" target="_blank">
                    <span><FontAwesomeIcon icon={faTwitterSquare} /></span>
                </a>
                <a href="https://www.instagram.com/juan_sanchezv98" target="_blank">
                    <span><FontAwesomeIcon icon={faInstagramSquare} /></span>
                </a>
                <a href="mailto:jcsanchezv1998@gmail.com" target="_blank">
                    <span><FontAwesomeIcon icon={faEnvelopeSquare} /></span>
                </a>
            </section>
        </header>
    );
}

Navbar.defaultProps = { isExpanded: false }

const mapStateToProps = ({ isExpanded }) => {
    return { isExpanded }
}



export default connect(mapStateToProps)(Navbar) 