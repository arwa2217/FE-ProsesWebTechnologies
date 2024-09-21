import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./AdminTable.module.scss"
import { adminHeaderData } from '../../../constant/data';
import Button from '../../../components/button/Button';
import { deleteAdmin } from '../../../redux/slice/UserInfoSlice';
const AdminTable = () => {
    const dispatch = useDispatch();
    const admins = useSelector((state) => state.userDetails?.adminInfo);
    console.log("admins>>>>",admins)
    const handleDelete = (adminId) => {
    dispatch(deleteAdmin(adminId));
  };
  return (
    <>
       <div className={styles.mainContainer}>
      <div className={styles.titleText}>Admin List</div>
      <table className={styles.table}>
        <thead>
          <tr>
           {adminHeaderData?.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {admins?.map((admin, index) => (
            <tr key={index}>
              <td>{admin?.name}</td>
              <td>{admin?.email}</td>
              <td>{admin?.phone}</td>
              <td>{admin?.address}</td>
                <td><Button buttonName="delete" type="button"
                      customClass={styles.deleteButtonStyle}
                handleClick={() => handleDelete(admin?.id)}
              /></td>
            </tr>
          ))}
        </tbody>
              </table>
              </div>
    </>
  )
}

export default AdminTable
