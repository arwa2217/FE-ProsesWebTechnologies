import React from 'react'
import { EmailIcon, PasswordIcon } from '../../assets/SvgComponents'
import styles from "./Login.module.scss";
import Button from '../../components/button/Button';
import { loginValidators } from "../../form-validators/loginValidators"
import { useForm } from 'react-hook-form';
import { EMAIL, PASSWORD } from '../../constant/formData';
import logo from "../../assets/images/logo.png"
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/slice/UserInfoSlice';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
  const role = data.email === 'arwa@gmail.com' ? 'admin' : 'client'; 
  localStorage.setItem('userLogin', JSON.stringify({ email: data.email, password: data.password, role }));
  dispatch(userLogin({ email: data.email, password: data.password, role}));
  
    if (role === 'admin') {
      navigate('/admin'); 
    } else {
      navigate('/client'); 
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.mainContainer}>
        <div className={styles.container}>
          <img src={logo} className={styles.logoContainer} alt="error display to logo" />
        <div className={styles.loginForm}>
          <span className={styles.iconLabelStyle}>
            <EmailIcon width={16} height={16} customClass={styles.iconCustomClass} />
            <label htmlFor={EMAIL} className={styles.labelStyle}>
              Email
            </label>
          </span>
          <div className={styles.inputFieldContainer}>
            <input
              type="text"
              placeholder="Enter email"
              className={styles.inputFieldStyle}
              {...register(EMAIL, loginValidators[EMAIL])}
            />
            <p className={styles.errorText}>
              {errors.email && (
                <span className="error">{errors.email.message}</span>
              )}
            </p>
          </div>
        </div>
        <div className={styles.loginForm}>
          <span className={styles.iconLabelStyle}>
            <PasswordIcon width={16} height={16} customClass={styles.iconCustomClass} />
            <label htmlFor={PASSWORD} className={styles.labelStyle}>
              Password
            </label>
          </span>
          <div>
            <span style={{ position: 'relative' }}>
              <input
                type="password"
                placeholder="Enter password"
                className={styles.inputFieldStyle}
                {...register(PASSWORD, loginValidators[PASSWORD])}
              />
              
            </span>
            <p className={styles.errorText}>
              {errors.password && (
                <span className="error">{errors.password.message}</span>
              )}
            </p>
          </div>
        </div>
        <Button
          buttonName="Login"
          type="submit"
          customClass={styles.loginButtonStyle}
          />
          </div>
      </form>
    </>
  )
}

export default Login
