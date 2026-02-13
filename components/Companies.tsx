import Link from "next/link";
import Container from "./Container";

export default function Companies() {
  const images = [
    { imageLink: "companies/company-img-1.png" },
    { imageLink: "companies/company-img-2.png" },
    { imageLink: "companies/company-img-3.png" },
  ];

  // 1. Group images into chunks of 3
  const groupedImages = [];
  for (let i = 0; i < images.length; i += 3) {
    groupedImages.push(images.slice(i, i + 3));
  }

  // 2. Duplicate the groups for seamless infinite scroll
  const scrollingGroups = [...groupedImages, ...groupedImages];

  return (
    <div className="py-12 overflow-hidden">
      <Container>
        <div className="text-5xl text-center pb-20 font-semibold">
          2000+ companies <br /> Hired NxtWave Learners
        </div>
        <div className="relative flex overflow-hidden group">
          {/* Main Scrolling Container (Horizontal) */}
          <div className="flex animate-scroll items-center">
            {scrollingGroups.map((group, groupIdx) => (
              /* Vertical Column Wrapper for 3 images */
              <div key={groupIdx} className="flex flex-col gap-10 shrink-0 ">
                {group.map((img, i) => (
                  <img
                    key={i}
                    src={img.imageLink}
                    alt="Company logo"
                    className="h-13"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center gap-5 justify-center">
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

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 40s linear infinite;
          }
          .group:hover .animate-scroll {
            animation-play-state: paused;
          }
        `}</style>
      </Container>
    </div>
  );
}
