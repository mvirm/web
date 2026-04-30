import photoA from "../../assets/hero/photoA.svg";
import photoB from "../../assets/hero/photoB.svg";
const GiftImage = () => {
  return (
    <div className="relative w-full aspect-square">
      <img
        src={photoA}
        className="absolute inset-0 w-full h-full object-cover animate-fade1 -top-8 md:top-0"
      />
      <img
        src={photoB}
        className="absolute inset-0 w-full h-full object-cover animate-fade2 -top-8 md:top-0"
      />
    </div>
  );
};

export default GiftImage;
