import { styles } from "../util/style"
import { discount } from "../assets"

const Home = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      {/* Information */}
      <div className={`flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* Discount information */}
        <div className="flex flex-row items-center py-[16px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}><span className="text-white">20%</span> Chegirma <span className="text-white">1 Oylik</span> hisob uchun</p>
        </div>

        {/* Title */}
        <div className="w-full">
          <h1 className={`${styles.heading1}`}>
            Yangi Avlod <br /> <span className="text-gradient">To'lov Usuli</span>
          </h1>
        </div>

        {/* Description */}
        <div></div>
      </div>

      {/* Animation image */}
      <div className=""></div>
    </section>
  )
}

export default Home