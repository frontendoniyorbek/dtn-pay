import { card } from "../assets"
import { layout, styles } from "../util/style"
import Button from "./Button"

const Contract = () => {
  return (
    <section id="product" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Bir nechta oson qadamda <br className="sm:block hidden"/> katrak tuzing</h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo exercitationem doloremque modi aliquam nam dolores deserunt, optio pariatur tempora in?
        </p>
        <Button styles={'mt-10'}/>
      </div>
      <div className={layout.sectionImage}>
        <img src={card} alt="card"  className="w-[100%] h-[100%]"/>
      </div>
    </section>
  )
}

export default Contract