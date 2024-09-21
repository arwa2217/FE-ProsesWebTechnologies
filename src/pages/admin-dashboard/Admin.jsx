import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from "./Admin.module.scss";
import Button from '../../components/button/Button';
import { ADDRESS, CONFIRM_PASSWORD, EMAIL, NAME, PASSWORD, PHONE_NUMBER } from '../../constant/formData';
import { clientFormValidators } from '../../form-validators/clientFormValidators';
import { loginValidators } from '../../form-validators/loginValidators';
import { addAdmin } from '../../redux/slice/UserInfoSlice';

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },watch
  } = useForm()

  let confirmPassword = watch(PASSWORD);
  
const onSubmit = (data) => {
    dispatch(addAdmin({
      id:Math.random(),
      name: data.name,
      email:data.email,
      phone: data.phone,
      address:data.address,
    }));
    navigate('/admin/admin-table');
  }
  return (
    <>
           <form onSubmit={handleSubmit(onSubmit)} className={styles.mainContainer}>
        
        <div className={styles.container}>
        {/* name field */}
            <div className={styles.loginForm}>
          <span className={styles.iconLabelStyle}>
            <label htmlFor={NAME} className={styles.labelStyle}>
              Name
            </label>
          </span>
          <div className={styles.inputFieldContainer}>
            <input
              type="text"
              placeholder="Enter your name"
              className={styles.inputFieldStyle}
              {...register(NAME, clientFormValidators[NAME])}
            />
            <p className={styles.errorText}>
              {errors.name && (
                <span className="error">{errors.name.message}</span>
              )}
            </p>
          </div>
        </div>
          {/* email field */}
          <div className={styles.loginForm}>
          <span className={styles.iconLabelStyle}>
            <label htmlFor={EMAIL} className={styles.labelStyle}>
              Email
            </label>
          </span>
          <div className={styles.inputFieldContainer}>
            <input
              type="text"
              placeholder="Enter your email"
              className={styles.inputFieldStyle}
              {...register(EMAIL, loginValidators[EMAIL],)}
            />
            <p className={styles.errorText}>
              {errors.email && (
                <span className="error">{errors.email.message}</span>
              )}
            </p>
          </div>
          </div>
          {/* password field */}
          <div className={styles.loginForm}>
          <span className={styles.iconLabelStyle}>
            <label htmlFor={PASSWORD} className={styles.labelStyle}>
              Password
            </label>
          </span>
          <div>
              <input
                type="password"
                placeholder="Enter password"
                className={styles.inputFieldStyle}
                {...register(PASSWORD, loginValidators[PASSWORD])}
              />
            <p className={styles.errorText}>
              {errors.password && (
                <span className="error">{errors.password.message}</span>
              )}
            </p>
          </div>
        </div>
          {/* confirm password field */}
          <div className={styles.loginForm}>
          <span className={styles.iconLabelStyle}>
            <label htmlFor={CONFIRM_PASSWORD} className={styles.labelStyle}>
              Confirm Password
            </label>
          </span>
          <div>
              <input
                type="password"
                placeholder="Re-enter password"
                className={styles.inputFieldStyle}
                {...register(CONFIRM_PASSWORD, {
                  ...loginValidators[CONFIRM_PASSWORD],
                  validate: (value) => value === confirmPassword || 'Password do not match',
                })}
              />
            <p className={styles.errorText}>
              {errors.confirm_password && (
                <span className="error">{errors.confirm_password.message}</span>
              )}
            </p>
          </div>
        </div>
{/* phone number field */}
        <div className={styles.loginForm}>
          <span className={styles.iconLabelStyle}>
            <label htmlFor={PHONE_NUMBER} className={styles.labelStyle}>
              Phone Number
            </label>
          </span>
          <div>
              <input
                type="text"
                placeholder="Enter your phone number"
                className={styles.inputFieldStyle}
                {...register(PHONE_NUMBER, clientFormValidators[PHONE_NUMBER])}
              />
            <p className={styles.errorText}>
              {errors.phone && (
                <span className="error">{errors.phone.message}</span>
              )}
            </p>
          </div>
          </div>
        {/* address field */}
         <div className={styles.loginForm}>
          <span className={styles.iconLabelStyle}>
            <label htmlFor={ADDRESS} className={styles.labelStyle}>
              Address
            </label>
          </span>
          <div className={styles.inputFieldContainer}>
            <textarea
              type="text"
              placeholder="Enter address"
              className={styles.inputFieldStyle}
              {...register(ADDRESS)}
            />
          </div>
        </div>
        <Button
          buttonName="Submit"
          type="submit"
            customClass={styles.submitButtonStyle}
          />
          </div>
      </form>
    </>
  )
}

export default Admin
