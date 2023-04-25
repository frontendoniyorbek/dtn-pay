import { feedbacks } from "../util/constants";
import { styles } from "../util/style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <div
      className={`${styles.paddingY} ${styles.flexCenter} flex-col `}>
      {/* <div className=" w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40">
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6">
            <h2 className={`${styles.heading2}`}>
              Odamlar biz haqimizda qandey fikirda
            </h2>
          <div className="w-full md:mt-0 mt-6">
            <p className={`${styles.paragraph} text-left max-w-[550px]`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              saepe laborum repudiandae voluptate ea architecto nesciunt
              inventore voluptates doloremque ab.
            </p>
          </div>
        </div>
      </div> */}

      <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1]">{feedbacks.map(feedback => (
        <FeedbackCard key={feedback.idx} {...feedback}/>
      ))}</div>
    </div>
  );
};

export default Testimonials;
