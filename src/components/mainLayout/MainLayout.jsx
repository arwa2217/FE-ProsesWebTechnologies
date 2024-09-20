import React from 'react'
import styles from "./mainLayout.module.scss"
import Header from '../header/Header'
import Footer from '../footer/Footer'
const MainLayout = ({children}) => {
  return (
    <>
      <div className={styles.mainContainer}>
        <Header/>
        {children}
        <Footer/>
      </div>
    </>
  )
}

export default MainLayout
