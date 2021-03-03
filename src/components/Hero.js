import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
// ...GatsbyImageSharpFluid

const Hero = () => {
  return (
    <header>
      <div
        style={{
          textAlign: "center",
          marginTop: "10rem",
          height: "30vh",
          color: "#034064",
        }}
      >
        <div>
          <h2 style={{ fontFamily: "Lato" }}>Web Design | Development</h2>
          <h4 style={{ marginTop: "2rem" }}>Hi, I am Ash... </h4>
          <h4>
            I Design and Create Beautiful and performant Web Applications.{" "}
          </h4>

          <Link style={{ marginTop: "4rem" }} to="/contact" className="btn">
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Hero
