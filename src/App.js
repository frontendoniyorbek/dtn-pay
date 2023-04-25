import React from 'react'
import { styles } from './util/style'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import Statistics from './components/Statistics'
import Contract from './components/Contract'
import Billing from './components/Billing'
import Business from './components/business'
import Cta from './components/Cta'
import Testimonials from './components/Testimonials'
import Clients from './components/Clients'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar/>
        </div>
      </div>

      {/* Home */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.container}`}>
          <Home/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.container}`}>
          <Statistics />
          <Contract/>
          <Billing/>
          <Business/>
          <Testimonials/>
          <Clients/>
          <Cta/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App