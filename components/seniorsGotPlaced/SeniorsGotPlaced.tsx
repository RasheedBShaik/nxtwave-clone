import { Tag } from "antd";
import Link from "next/link";
import { useState } from "react";
import Container from "../Container";
import SeniorsGotPlacedCards from "./SeniorsGotPlacedCards";

const tagsData = [
  "All",
  "Non IT Branch to IT Job",
  "Non Enginering Degree",
  "Career Gap",
  "Got into Top MNCs",
  "Non IT job to IT Job",
];

const SeniorsGotPlaced = () => {
  const [selected, setSelected] = useState("All");

  return (
    <section className="bg-[#f1f5f9]">
      <Container>
        <h1 className="text-5xl font-bold text-center py-12">
          Your Seniors Got Placed. It's Your Turn Now!
        </h1>

        <div className="flex flex-wrap gap-3 justify-center">
          {tagsData.map((tag) => {
            const isActive = selected === tag;

            return (
              <Tag.CheckableTag
                key={tag}
                checked={isActive}
                onChange={() => setSelected(tag)}
                className={`
                  px-5! py-4! text-sm rounded-2xl! cursor-pointer transition-all border-black! h-10! flex! items-center! justify-center!
                  ${
                    isActive
                      ? "bg-[#2563fb]! text-white border-0! "
                      : "bg-white  border-[#2563fb] border  hover:border-[#2563fb]!"
                  }
                `}
              >
                {tag}
              </Tag.CheckableTag>
            );
          })}
        </div>

        {/* Cards */}
        <div>
          <SeniorsGotPlacedCards selectedCategory={selected} />
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
            Enroll Now
          </a>
          <Link
            href="#"
            className="text-[#7c3aed] w-full max-w-50 text-center font-semibold"
          >
            View All Reviews
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default SeniorsGotPlaced;
