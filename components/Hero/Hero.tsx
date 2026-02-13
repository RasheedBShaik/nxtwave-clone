"use client"
import Container from "../Container"
import Heroform from "./Heroform"
import Herohighlights from "./Herohighlights"





const Hero = () => {
  return (
    <Container>

    <section className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 py-5 lg:py-20">
      <Herohighlights/>
      </div>
      <div className="w-full lg:w-1/2 py-5 lg:py-2 ">

      <Heroform />
      </div>
    </section>
    </Container>
  )
}

export default Hero
