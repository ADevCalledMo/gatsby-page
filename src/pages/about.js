import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
    return (
        <div>
            <h1>About Me</h1>
            <p>Here will be a brief description of my journey so far...</p>
            <p> Need to talk to me about something? <Link to="/contact"> Contact me.</Link></p>
        </div>
    )
}

export default AboutPage; 