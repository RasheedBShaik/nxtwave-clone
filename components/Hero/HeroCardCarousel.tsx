import { Carousel } from "antd";
import styled from "styled-components";
import HeroBhargaviCard from "./hero-cards/HeroBhargavi";
import HeroCompaniesCard from "./hero-cards/HeroCompaniesCard";
import HeroDeviCard from "./hero-cards/HeroDeviCard";
import HeroDoubtsCard from "./hero-cards/HeroDoubtsCard";
import HeroOnlineLabsCard from "./hero-cards/HeroOnlineLabsCard";
import HeroSaiCard from "./hero-cards/HeroSaiCard";
import HeroSuryaCard from "./hero-cards/HeroSuryaCard";

const StyledCarousel = styled(Carousel)`

  .slick-dots li {
    width: 16px;
    height: 16px;
    margin: 0 4px;
  }

  .slick-dots li button {
    width: 16px !important;
    height: 16px !important;
    padding: 0 !important;
    background: transparent !important;
    border: none !important;
    position: relative !important;
    opacity: 1 !important;
  }


  .slick-dots li button::after {
    content: "" !important;
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    width: 18px !important;
    height: 8px !important;
    border-radius: 50% !important;
    background: #d1d5db !important;
    transition: all 0.3s ease !important;
  }

  .slick-dots li.slick-active button::after {
    width: 18px !important;
    height: 12px !important;
    background: #64748b !important;
  }
`;

const Herocardcarousel = () => {
  return (
    <div className="mt-10" >
        
      <StyledCarousel dots autoplay >
        <HeroCompaniesCard/>
        <HeroSuryaCard/>
        <HeroDoubtsCard />
        <HeroBhargaviCard/>
        <HeroOnlineLabsCard/>
        <HeroDeviCard/>
        <HeroSaiCard/>
      </StyledCarousel>
    </div>
  );
};

export default Herocardcarousel;