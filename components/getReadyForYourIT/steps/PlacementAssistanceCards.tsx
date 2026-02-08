const list = [
  { img: "placementAssistance/aptitude.png", alt: "aptitude", name: "Aptitude Training" },
  { img: "placementAssistance/soft-skills-coaching.png", alt: "soft-skills-coaching", name: "Soft Skills Training" },
  { img: "placementAssistance/resume-preparation.png", alt: "Resume Preparation", name: "Resume Preparation" },
  { img: "placementAssistance/mock-interviews.png", alt: "AI-Powered Mock Interviews", name: "AI-Powered Mock Interviews" },
  { img: "placementAssistance/mock-interviews-person.png", alt: "Mock Interviews by Tech and HR Panels", name: "Mock Interviews by Tech and HR Panels" },
  { img: "placementAssistance/scheduling.png", alt: "Scheduling Interviews", name: "Scheduling Interviews" },
  { img: "placementAssistance/interview-experiences.png", alt: "Access to 300+ Senior Interview Experiences", name: "Access to 300+ Senior Interview Experiences" },
  { img: "placementAssistance/placement-corner.png", alt: "Access to Placement Portal", name: "Access to Placement Portal" },
  { img: "placementAssistance/offline-drives.png", alt: "Mega Offline Placement Drives", name: "Mega Offline Placement Drives" },
  { img: "placementAssistance/negotiation-with-companies.png", alt: "Negotiation with companies for higher salaries", name: "Negotiation with companies for higher salaries" },
];

const PlacementAssistanceCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
      {list.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 p-4 "
        >
          {/* Image */}
          <div className="h-10 w-10 shrink-0">
            <img src={item.img} alt={item.alt} className="w-full h-full" />
          </div>

          {/* Title */}
          <h2 className="text-base text-gray-800">
            {item.name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default PlacementAssistanceCards;
