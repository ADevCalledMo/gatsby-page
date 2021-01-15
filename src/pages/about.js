import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
    return (
        <div>
            <Header /> 
            <h1>About Me</h1>
            <p>Here will be a brief description of my journey so far...</p>
            <p> Need to talk to me about something? <Link to="/contact"> Contact me.</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage; 