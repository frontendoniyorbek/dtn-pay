import React from 'react'
import { layout, styles } from '../util/style'
import Button from './Button'
import { features } from '../util/constants'
import FeatureCard from './FeatureCard'

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Biznes rivojlantirish, <br className='sm:block hidden'/> pulni hal qilamiz.
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5` }>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea cum numquam qui, eaque voluptatem fugiat harum quam quisquam beatae?
        </p>
        <Button/>
      </div>

      <div className={`${layout.sectionImage} flex-col`}>
        {features.map((feature, idx) => (
          <FeatureCard key={feature.id} {...feature} idx={idx}/>
        ))}
      </div>
    </section>
  )
}

export default Business