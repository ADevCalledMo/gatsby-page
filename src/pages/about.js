import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import Head from "../components/head"

const AboutPage = () => {
    return (
        <Layout>
        <Head title="About" />
            <h1>About Me</h1>
            <p>Here will be a brief description of my journey so far...</p>
            <p> Need to talk to me about something? <Link to="/contact"> Contact me.</Link></p>
        </Layout>
    )
}

export default AboutPage; 