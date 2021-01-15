import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
   return (
     <div>
       <h1>Hello!</h1>
       <h2>I'm Mozes, I am a web developer from rainy Nottingham! </h2>
       <p> Need a Developer? <Link to="/contact"> Contact Me.</Link></p>
     </div>
   )
}

export default IndexPage
