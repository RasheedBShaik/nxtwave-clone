import Link from "next/link";
import Container from "./Container";

const Trainers = () => {
  return (
    <section className="py-12 flex-col">
      <Container>
        <h1 className="text-5xl font-bold text-center w-full pb-5">
          Your Trainers are Alumni of
        </h1>
        <picture>
  <source
    media="(max-width: 768px)"
    srcSet="trainersAlumni/alumni-mobile.png"
  />
  <img
    className="py-6 px-6"
    src="trainersAlumni/alumni.png"
    alt="trainers Alumni"
  />
</picture>

        <p  className=" mx-auto w-fit ">

        <Link href="#">
          and many more...
        </Link>
        </p>
      </Container>
    </section>
  );
};

export default Trainers;
