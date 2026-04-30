import GiftImage from "./GiftImage.jsx";
import HeroText from "./HeroText.jsx";
import NavBar from "../navBar/NavBar.jsx";
import bgTD from "../../assets/background/tabletDesktop/hero.svg";
import bgMobile from "../../assets/background/mobile/hero.svg";
import icon from "../../assets/icons/icon.svg";

const Hero = () => {
  return (
    <div className="relative z-30 pointer-events-none">
      <picture className="block w-full -top-3 md:-top-12 relative pointer-events-none -mb-3 md:-mb-12">
        {/* <source media="(min-width: 1024px)" srcSet={bgTD} /> */}
        <source media="(min-width: 768px)" srcSet={bgTD} />
        <img src={bgMobile} alt="" className="w-full h-auto object-contain" />
      </picture>
      <div className="absolute inset-0 w-full flex flex-col">
        <div className="flex flex-col md:flex-row md:grid-cols-3">
          <div className="w-full md:w-3/5 flex flex-col gap:0 md:gap-10 order-2 md:order-1 border-2 border-red-500">
            <NavBar />
            <HeroText />
          </div>
          <div className="w-full md:w-2/5  order-1 md:order-2 -mb-8 md:mb-0 border-2 border-blue-500">
            <img
              src={icon}
              alt="icon"
              className="block md:hidden w-8 h-auto m-1"
            />
            <GiftImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
