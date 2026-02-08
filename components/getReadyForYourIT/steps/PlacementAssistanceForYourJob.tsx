import PlacementAssistanceCards from "./PlacementAssistanceCards";
import PlacementsAssistanceCarousel from "./PlacementsAssistanceCarousel";

const PlacementAssistanceForYourJob = () => {
  return (
    <div className="my-6 font-normal text-black text-left">
      <p className="my-6">Up to 16 Months from the date of joining</p>
      <p className="my-6">Free Add-Ons:</p>
      <PlacementAssistanceCards />
      <PlacementsAssistanceCarousel />
    </div>
  );
};

export default PlacementAssistanceForYourJob;
