import React from 'react'
import styles from "./header.module.scss"
import logo from "../../assets/images/logo.png"
// import { useSelector } from 'react-redux'


const Header = () => {
  // const userRole = JSON.parse(localStorage.getItem('userRole'));
  // console.log("userRole",userRole)
  return (
    <>
    <div className={styles.mainContainer}>
              <img src={logo} className={styles.logoContainer} alt="error display to logo" />
              <div className={styles.navContainer}>
              <div className={styles.navbarContainer}>
            
          </div>
          
            
        </div>
                  
      </div>
    </>
  )
}

export default Header
