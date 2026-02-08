import Link from "next/link";
import FundamentalsCarousel from "./FundamentalsCarousel";

const Fundamentals = () => {
  const list = [
    {
      image: "/fundamentals/clock.svg",
      content: "Duration: 2 Months",
      alt: "clock-icon",
    },
    {
      image: "/fundamentals/laptop-icon.svg",
      content: "3 Hours Classes 3 Hours Labs per day",
      alt: "laptop-icon",
    },
    {
      image: "/fundamentals/book.svg",
      content: "Courses Include",
      alt: "book-icon",
    },
    
  ];
  const courses = [
    {
      image: "fundamentals/html.png",
      name: "HTML",
      alt: "HTML-png",
    },
    {
      image: "fundamentals/css.png",
      name: "CSS",
      alt: "CSS-png",
    },
    {
      image: "fundamentals/python.png",
      name: "Python",
      alt: "Python-png",
    },
    {
      image: "fundamentals/sql.png",
      name: "SQL",
      alt: "SQL-png",
    },
  ];
  return (
    <div className="w-full font-normal">
      <div className="flex flex-col gap-3 py-4">
        {list.map((item, index) => (
          <div key={index} className="flex gap-1 items-center mt-4 text-base">
            <div className="flex items-center justify-center">
              <img
                src={item.image}
                alt={item.alt}
                className="w-4 h-4 object-contain"
              />
            </div>
            <p>{item.content}</p>
          </div>
        ))}

        {/* cards */}
        <div className="flex justify-between h-18  w-full  max-w-[320px]">
            {courses.map((Item,index)=>(
                <div key={index} className="border rounded-lg border-gray-400 flex flex-col justify-center items-center">
                    <div className="flex justify-center w-18 py-1">
                        <img className="h-6.75 w-6.75" src={Item.image} alt={Item.alt} />
                    </div>
                    <p className="text-[#475569]">{Item.name}</p>

                </div>
            ))}
        </div>


        <div className="flex gap-1 items-center">
          <div className="flex items-center justify-center">
            <img
              src="fundamentals/clipboard-icon.svg"
              alt="clipboard-icon"
              className="w-4 h-4 object-contain"
            />
          </div>
          <p>Fundamentals Exam</p>
        </div>
        <Link  href="#">
          <div className="flex w-fit text-[#7c3aed]">View Curriculum &gt;</div>
        </Link>

        {/* carousel */}
        <div>

        <FundamentalsCarousel/>
        </div>


      </div>
    </div>
  );
};

export default Fundamentals;
