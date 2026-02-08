import Link from "next/link";

const JobTrackCards = () => {
  const list = [
    {
      optionstyle: "text-[#1340af] bg-[#dbeafe]",
      option: "OPTION 1",
      name: "MERN Full Stack",
      durationimg: "chooseYourJobTrack/duration.svg",
      duration: "Duration :6 Months",
      salaryimg: "chooseYourJobTrack/salary.svg",
      salary: "Fresher salaries: 3LPA - 6LPA in India",
      projectimg: "chooseYourJobTrack/salary.svg",
      project: "Real-time project",
      projectimgs: [
        { projectimg: "chooseYourJobTrack/mongo-db.svg" },
        { projectimg: "chooseYourJobTrack/express-js.svg" },
        { projectimg: "chooseYourJobTrack/react-js.svg" },
        { projectimg: "chooseYourJobTrack/node-js.svg" },
      ],
      curriculum: (
        <Link href="#">
          <div className="flex w-fit text-[#7c3aed] cursor-pointer">
            View Curriculum &gt;
          </div>
        </Link>
      ),
      statusimg: "chooseYourJobTrack/checked.svg",
      statuscolor: "#16a34a",
      status: "Seats Available",
    },
    {
      optionstyle: "text-[#9a3412] bg-[#ffedd5]",
      option: "OPTION 2",
      name: "Java Full Stack",
      durationimg: "chooseYourJobTrack/duration.svg",
      duration: "Duration :6 Months",
      salaryimg: "chooseYourJobTrack/salary.svg",
      salary: "Fresher salaries: 3LPA - 6LPA in India",
      projectimg: "chooseYourJobTrack/salary.svg",
      project: "Real-time project",
      projectimgs: [
        { projectimg: "chooseYourJobTrack/react-js.svg" },
        { projectimg: "chooseYourJobTrack/java.svg" },
        { projectimg: "chooseYourJobTrack/spring-boot.svg" },
      ],
      curriculum: (
        <Link href="#">
          <div className="flex w-fit text-[#7c3aed] cursor-pointer">
            View Curriculum &gt;
          </div>
        </Link>
      ),
      statusimg: "chooseYourJobTrack/checked.svg",
      statuscolor: "#16a34a",
      status: "Seats Available",
    },
    {
      optionstyle: "text-[#6b21a8] bg-[#f0d9ff]",
      option: "OPTION 3",
      name: "Q/A Automation Testing",
      durationimg: "chooseYourJobTrack/duration.svg",
      duration: "Duration :3 Months",
      salaryimg: "chooseYourJobTrack/salary.svg",
      salary: "Fresher salaries: 2LPA - 7LPA in India",
      projectimg: "chooseYourJobTrack/salary.svg",
      project: "Real-time project",
      projectimgs: [{ projectimg: "chooseYourJobTrack/selenium.svg" }],
      curriculum: (
        <Link href="#">
          <div className="flex w-fit text-[#7c3aed] cursor-pointer">
            View Curriculum &gt;
          </div>
        </Link>
      ),
      statusimg: "chooseYourJobTrack/seat-close.svg",
      statuscolor: "#d97706",
      status: "Seats filled. Next batch starts on 01 Jul 2026",
    },
    {
      optionstyle: "text-[#06546a] bg-[#d1fae5]",
      option: "OPTION 4",
      name: "Data Analytics",
      durationimg: "chooseYourJobTrack/duration.svg",
      duration: "Duration :3 Months",
      salaryimg: "chooseYourJobTrack/salary.svg",
      salary: "Fresher salaries: 2LPA - 7LPA in India",
      projectimg: "chooseYourJobTrack/salary.svg",
      project: "Real-time project",
      projectimgs: [
        { projectimg: "chooseYourJobTrack/power-bi.svg" },
        { projectimg: "chooseYourJobTrack/tableau.svg" },
      ],
      curriculum: (
        <Link href="#">
          <div className="flex w-fit text-[#7c3aed] cursor-pointer">
            View Curriculum &gt;
          </div>
        </Link>
      ),
      statusimg: "chooseYourJobTrack/seat-close.svg",
      statuscolor: "#d97706",
      status: "Seats filled. Next batch starts on 01 Jul 2026",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 pr-4 gap-6">
      {list.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-6 px-5 border border-gray-200"
        >
          {/* Option badge */}
          <span
            className={`inline-block px-3 py-1 text-sm font-semibold rounded-md mb-4 ${item.optionstyle}`}
          >
            {item.option}
          </span>

          {/* Title */}
          <h2 className="text-xl font-bold mb-4">{item.name}</h2>

          {/* Duration */}
          <div className="flex items-center gap-2 mb-3 text-gray-600">
            <img src={item.durationimg} alt="duration" className="w-4 h-4" />
            <p>{item.duration}</p>
          </div>

          {/* Salary */}
          <div className="flex items-center gap-2 mb-3 text-gray-600">
            <img src={item.salaryimg} alt="salary" className="w-4 h-4" />
            <p>{item.salary}</p>
          </div>

          {/* Project */}
          <div className="flex items-center gap-2 mb-4 text-gray-600">
            <img src={item.projectimg} alt="project" className="w-4 h-4" />
            <p>{item.project}</p>
          </div>

          {/* Tech stack icons */}
          <div className="flex items-center gap-3 mb-4">
            {item.projectimgs.map((img, i) => (
              <img
                key={i}
                src={img.projectimg}
                alt="tech"
                className="max-w-full"
              />
            ))}
          </div>

          {/* Curriculum */}
          {item.curriculum}

          <hr className="border-gray-300 my-3" />

          {/* Status */}
          <div className="flex items-center gap-2 font-medium">
            <img src={item.statusimg} alt="status" className="w-4 h-4" />
            <span style={{ color: item.statuscolor }}>{item.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobTrackCards;
