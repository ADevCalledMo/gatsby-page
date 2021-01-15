import React from "react"

import Footer from "../components/footer"
import Header from "../components/header"

const ContactPage = () => {
    return (
        <div>
            <Header /> 
            <h1>Contact</h1>
            <p>You can contact me in the following way:</p>
            <ol>
                <li>PHONE: 07XXX XXXXXX</li>
                <li>EMAIL: MOZESWALKER@XXXXX.COM</li>
                <li>TWITTER: <a href="https://www.google.com" target="_blank" rel="noreferrer"> Click Here!</a></li>
            </ol>
            <Footer />
        </div>
    )
}

export default ContactPage; 