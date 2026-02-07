"use client"
import Container from "../Container"
import HeroForm from "./HeroForm"
import HeroHighlights from "./HeroHighlights"



const Hero = () => {
  return (
    <Container>

    <section className="border flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 py-5 lg:py-35">
      <HeroHighlights />
      </div>
      <div className="w-full lg:w-1/2 py-5 lg:py-10 ">

      <HeroForm />
      </div>
    </section>
    </Container>
  )
}

export default Hero
