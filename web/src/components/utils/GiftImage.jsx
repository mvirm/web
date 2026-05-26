import photoA from "../../assets/hero/photoA.svg";
import photoB from "../../assets/hero/photoB.svg";
const GiftImage = () => {
  return (
    <div className="giftImage">
      <img src={photoA} alt="foto 1" className="animate-fade1" />
      <img src={photoB} alt="foto 2" className="animate-fade2" />
    </div>
  );
};

export default GiftImage;
