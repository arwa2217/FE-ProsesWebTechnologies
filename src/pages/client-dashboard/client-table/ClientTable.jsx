import React from 'react';
import styles from './ClientTable.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/button/Button';
import { clientHeaderData } from '../../../constant/data';
import { deleteClient } from '../../../redux/slice/UserInfoSlice';

const ClientTable = () => {
     const dispatch = useDispatch();
    const clients = useSelector((state) => state.userDetails?.userInfo);
    const handleDelete = (clientId) => {
    dispatch(deleteClient(clientId));
  };

  return (
      <>
          <div className={styles.mainContainer}>
      <div className={styles.titleText}>Client List</div>
      <table className={styles.table}>
        <thead>
          <tr>
           {clientHeaderData?.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>{client.city}</td>
              <td>{client.state}</td>
              <td>{client.country}</td>
                <td><Button buttonName="delete" type="button"
                      customClass={styles.deleteButtonStyle}
                      handleClick={() => handleDelete(client?.id)} /></td>
            </tr>
          ))}
        </tbody>
              </table>
              </div>
    </>
  );
};

export default ClientTable;
