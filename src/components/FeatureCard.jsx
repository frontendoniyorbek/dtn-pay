import { features } from "../util/constants";
import { styles } from "../util/style";

const FeatureCard = ({ icon, title, countent, idx }) => {
  return (
    <div
      className={`flex items-center justify-center flex-row p-6 rounded-[20px] cursor-pointer feature-card ${
        idx !== features.length - 1 ? "mb-6" : "mb-0"
      }`}>
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-lightBlue`}>
        <img
          src={icon}
          alt={title}
          className={`w-[50%] h-[50%] object-contain`}
        />
      </div>

      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-montserrat font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-montserrat font-normal text-lightWhite text-[16px] leading-[24px]">
          {countent}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
