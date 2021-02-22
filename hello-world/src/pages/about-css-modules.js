import React from "react"
import Container from "./components/container"
import styles from "./about-css-modules.module.css"
console.log(styles)
export default function About() {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
    </Container>
  )
}