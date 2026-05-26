import photoA from "../../assets/hero/photoA.svg";
import photoB from "../../assets/hero/photoB.svg";
const GiftImage = () => {
  return (
    <div className="giftImage" fetchpriority="high">
      <img src={photoA} className="animate-fade1" />
      <img src={photoB} className="animate-fade2" />
    </div>
  );
};

export default GiftImage;
