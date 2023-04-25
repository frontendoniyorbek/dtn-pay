import { apple, bill, google } from "../assets"
import { layout, styles } from "../util/style"

const Billing = () => {
  return (
    <section id="features" className={layout.sectionRevers}>
      <div className={layout.sectionImageRevers}>
        <img src={bill} alt="bill" className="w-[100%] h-[100%] relative z-[5]"/>

        <div className="absolute -left-1/2 z-[3] w-[50%] h-[55%] rounded-full top-0 white__gradient" />
        <div className="absolute z-[0] w-[50%] -left-1/2 h-[50%] bottom-0 rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Hisob-kitob va fakturial <br className="sm:block hidden"/> osongina boshqarish
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut inventore mollitia ea laborum voluptatibus totam ab molestias doloribus. Esse?
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={google} alt="google" className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"/>
          <img src={apple} alt="apple" className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"/>
        </div>
      </div>
    </section>
  )
}

export default Billing