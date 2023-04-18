import React from 'react'
import { styles } from './util/style'
import { Navbar } from './components/Navbar'
import Home from './components/Home'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar/>
          <Home/>
        </div>
      </div>
    </div>
  )
}

export default App