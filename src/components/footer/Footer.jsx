import React from 'react'
import styles from "./footer.module.scss"
import { webLinkData } from '../../constant/data'
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '../../assets/SvgComponents'
const Footer = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          {
            webLinkData?.map((item,i) => {
              return (
                <React.Fragment key={i}>
                  <div className={styles.linkContent}>{item}</div> 
                </React.Fragment>
              )
            })
          }
        </div>
        <div className={styles.contactContainer}>1400 E University Ave, Las Cruces, United States, (575) 646-5917</div>
        <div className={styles.mediaContainer}>
          <FacebookIcon width='30px' height='30px' fillColor="#FFFFFF" />
          <InstagramIcon width='30px' height='30px' fillColor="#FFFFFF"/>
          <YoutubeIcon width='30px' height='30px' fillColor="#FFFFFF"/>
          <TwitterIcon width='30px' height='30px' fillColor="#FFFFFF"/>
        </div>
      </div>
    </>
  )
}

export default Footer
