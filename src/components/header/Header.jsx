import React from 'react'
import styles from "./header.module.scss"
import logo from "../../assets/images/logo.png"
import { useSelector } from 'react-redux';
import { webLinkData } from '../../constant/data';

const Header = () => {
  const role = useSelector((state) => state.userDetails?.userLoginDetails?.role);
  console.log("role>>>", role)
  return (
    <>
    <div className={styles.mainContainer}>
              <img src={logo} className={styles.logoContainer} alt="error display to logo" />
        <div className={styles.titleText}> {
              role === 'client' ? <h2>Welcome to the Client Dashboard</h2> :  <h2>Welcome to the Admin Dashboard</h2>
            }      
        </div>
            <div className={styles.navbarContainer}>
             {
            webLinkData?.map((item,i) => {
              return (
                <React.Fragment key={i}>
                  <div className={styles.navbarContent}>{item}</div> 
                </React.Fragment>
              )
            })
          }
          </div>
        </div>            
    </>
  )
}

export default Header
