import React from 'react'
import styles from './userCard.module.scss';
import Divider from '../divider/Divider';
import { userList } from '../../constant/data';
import avatar from '../../assets/images/profile.png'
const UserCard = () => {
  return (
    <>
      <div className={styles.mainContainer}>
      {userList?.map((item, i) => {
        return (
          <React.Fragment key={i}>
            <div className={styles.cardContainer}>
              <div ><img className={styles.avatarContainer} src={avatar} alt="error"/></div>
              <Divider customClass={styles.divider} />
              <p className={styles.usernameStyle}>username: {item?.name}</p>
            </div>
          </React.Fragment>
        )
      })}
      </div>
    </>
  )
}

export default UserCard
