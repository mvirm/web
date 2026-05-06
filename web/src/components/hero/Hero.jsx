import GiftImage from "./GiftImage.jsx";
import HeroText from "./HeroText.jsx";
import NavBar from "../navBar/NavBar.jsx";
import bgTD from "../../assets/background/tabletDesktop/hero.svg";
import bgMobile from "../../assets/background/mobile/hero.svg";
import icon from "../../assets/icons/icon.svg";

const Hero = () => {
  return (
    <div className="heroContainer">
      <picture>
        <source media="(min-width: 768px)" srcSet={bgTD} />
        <img src={bgMobile} alt="" />
      </picture>
      <div className="heroContent">
        <div className="heroLayout">
          <section className="sectionHeroText">
            <NavBar />
            <HeroText />
          </section>
          <section className="sectionHeroImage">
            <img
              src={icon}
              alt="icon"
              className="block md:hidden w-10 h-auto m-1"
            />
            <GiftImage />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
