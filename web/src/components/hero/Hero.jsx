import GiftImage from "./GiftImage.jsx";
import HeroText from "./HeroText.jsx";
import NavBar from "../navBar/NavBar.jsx";
import bgTD from "../../assets/background/tabletDesktop/hero.svg";
import bgMobile from "../../assets/background/mobile/hero.svg";
import icon from "../../assets/icons/icon.svg";

const Hero = () => {
  return (
    <div className="hero-project-container heroPictureLayout">
      <picture>
        <source media="(min-width: 768px)" srcSet={bgTD} />
        <img src={bgMobile} alt="" />
      </picture>
      <div id="home" className="heroContent">
        <div className="heroLayout">
          <section className="sectionHeroText">
            <NavBar />
            <HeroText />
          </section>
          <section className="sectionHeroImage">
            <GiftImage />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
