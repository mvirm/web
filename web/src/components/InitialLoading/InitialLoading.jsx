import GiftImage from "../utils/GiftImage.jsx";
import ProgressBar from "./ProgressBar.jsx";
import initialLoading from "../../assets/background/initialLoading.svg";
const InitialLoading = () => {
  return (
    <div className="initialLoading">
      <picture>
        <img
          src={initialLoading}
          alt="background loading inicial"
          fetchpriority="high"
        />
      </picture>
      <div>
        <GiftImage />
      </div>
      <ProgressBar />
    </div>
  );
};
export default InitialLoading;
