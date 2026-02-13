import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import Container from "./Container";

const Prefer = () => {
  const mainVideoId = "-U_YQ3W50nE";
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonialVideoIds = [
    "-U_YQ3W50nE",
    "-U_YQ3W50nE",
    "-U_YQ3W50nE",
    "-U_YQ3W50nE",
    "-U_YQ3W50nE", // Added more to make scrolling visible
    "-U_YQ3W50nE",
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 320; // Adjust based on video card width
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container>
      <section className="py-16">
        <div className="flex flex-col gap-12">
          {/* Top Section: Main Feature */}
          <div className="flex px-4 md:px-2 flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 ">
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
                Why <span className="text-blue-600">Top Companies </span> Prefer{" "}
                <span className="text-blue-600">NxtWave Students</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                NxtWave students carved a name for themselves in the IT
                industry. Hear it directly from the CEOs, CXOs and HRs of tech
                companies.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-gray-100">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${mainVideoId}`}
                  title="Featured Video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Bottom Section: Scrollable Testimonials */}
          <div className="relative group">
            {/* Scrolling Wrapper */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 px-2 no-scrollbar scroll-smooth"
            >
              {testimonialVideoIds.map((id, index) => (
                <div
                  key={index}
                  className="shrink-0 w-70 md:w-[320px] aspect-video rounded-xl overflow-hidden shadow-md bg-black border border-gray-100"
                >
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`Testimonial ${index + 1}`}
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
            {/* Scroll Buttons */}
            <div className="flex justify-center gap-3 mb-4 p-2 ">
              <button
                onClick={() => scroll("left")}
                className="p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 shadow-sm transition-all active:scale-90"
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 shadow-sm transition-all active:scale-90"
                aria-label="Scroll right"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <div className=" flex items-center gap-5 justify-center">
              <div className="relative">
                {/* Glow */}
                <span className="absolute -left-2 -inset-0.45 rounded-full h-7 w-7 bg-[#47505c] opacity-20"></span>

                {/* Dot */}
                <span className="relative inline-block w-2.5 h-2.5 rounded-full bg-[#2563fb] border border-[#2563fb]"></span>
              </div>

              <p className="text-lg">Next batch starts from Feb 9th</p>
            </div>
            <div className="py-10 flex flex-col md:flex-row items-center gap-5  justify-center">
              <a
                href="#hero-form"
                className="bg-[#7c3aed] text-white rounded-2xl text-center w-full py-3 max-w-50 font-semibold"
              >
                Book a free demo
              </a>
              <Link
                href="#"
                className="text-[#7c3aed] w-full max-w-50 text-center font-semibold"
              >
                View All Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Prefer;
