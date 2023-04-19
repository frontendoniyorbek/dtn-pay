import React from 'react'
import { styles } from './util/style'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'

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
    </div>
  )
}

export default App