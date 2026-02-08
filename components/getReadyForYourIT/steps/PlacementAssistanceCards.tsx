
const list = [
  {
    img: "placementAssistance/aptitude.png",
    alt: "aptitude",
    name: "Aptitude Training",
  },
  {
    img: "placementAssistance/soft-skills-coaching.png",
    alt: "soft-skills-coaching",
    name: "Soft Skills Training",
  },
  {
    img: "placementAssistance/soft-skills-coaching.png",
    alt: "Resume Preparation",
    name: "Resume Preparation",
  },
  {
    img: "placementAssistance/soft-skills-coaching.png",
    alt: "AI-Powered Mock Interviews",
    name: "AI-Powered Mock Interviews",
  },{
    img: "placementAssistance/soft-skills-coaching.png",
    alt: "Mock Interviews by Tech and HR Panels",
    name: "Mock Interviews by Tech and HR Panels",
  },{
    img: "placementAssistance/soft-skills-coaching.png",
    alt: "Scheduling Interviews",
    name: "Scheduling Interviews",
  },
  {
    img: "placementAssistance/soft-skills-coaching.png",
    alt: "Access to 300+ Senior Interview Experiences",
    name: "Access to 300+ Senior Interview Experiences",
  },{
    img: "placementAssistance/soft-skills-coaching.png",
    alt: "Access to Placement Portal",
    name: "Access to Placement Portal",
  },{
    img: "placementAssistance/soft-skills-coaching.png",
    alt: "Mega Offline Placement Drives",
    name: "Mega Offline Placement Drives",
  },{
    img: "placementAssistance/soft-skills-coaching.png",
    alt: "Negotiation with companies for higher salaries",
    name: "Negotiation with companies for higher salaries",
  },
];

const PlacementAssistanceCards = () => {
  return (
    <div className="grid justify-between lg:grid-cols-2 w-full gap-y-6 gap-x-4">
      {list.map((item, index) => (
        <div
          key={index}
          className="items-center  flex"
        >
          {/* Image */}
          <div className="flex ">
            <img src={item.img} alt={item.alt} className="w-20 h-20" />
          </div>

          {/* Title */}
          <h2>{item.name}</h2>

        </div>
      ))}
    </div>
  );
};

export default PlacementAssistanceCards;
