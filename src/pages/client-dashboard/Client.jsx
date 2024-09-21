import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from "./Client.module.scss";
import { CITY, COUNTRY, EMAIL, NAME, PHONE_NUMBER, STATE } from '../../constant/formData';
import { clientFormValidators } from '../../form-validators/clientFormValidators';
import { loginValidators } from '../../form-validators/loginValidators';
import Button from '../../components/button/Button';
import { cityData, countryData, stateData } from '../../constant/data';
import { addClient } from '../../redux/slice/UserInfoSlice';

const Client = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    dispatch(addClient({
      id:Math.random(),
      name: data.name,
      email:data.email,
      phone: data.phone,
      city: data.city,
      state: data.state,
      country:data.country,
    }));
    navigate('/client/client-table');
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
              {...register(EMAIL, loginValidators[EMAIL])}
            />
            <p className={styles.errorText}>
              {errors.email && (
                <span className="error">{errors.email.message}</span>
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
          
          {/* city */}
           <div className={styles.loginForm}>
          <span className={styles.iconLabelStyle}>
            <label htmlFor={CITY} className={styles.labelStyle}>
              City
            </label>
          </span>
          <div>
          <select
          id="city"
                {...register(CITY, clientFormValidators[CITY])}
                className={styles.selectInputField}
        >
          <option value="">Select City</option>
          {cityData?.map((city) => (
            <option key={city?.id} value={city?.name}>
              {city?.name}
            </option>
          ))}
     
        </select>
            <p className={styles.errorText}>
              {errors.city && (
                <span className="error">{errors.city.message}</span>
              )}
            </p>
          </div>
          </div>

           {/* state */}
           <div className={styles.loginForm}>
          <span className={styles.iconLabelStyle}>
            <label htmlFor={STATE} className={styles.labelStyle}>
              State
            </label>
          </span>
          <div>
          <select
          id="city"
                {...register(STATE, clientFormValidators[STATE])}
                className={styles.selectInputField}
        >
          <option value="">Select State</option>
          {stateData?.map((state) => (
            <option key={state?.id} value={state?.name}>
              {state?.name}
            </option>
          ))}
     
        </select>
            <p className={styles.errorText}>
              {errors.state && (
                <span className="error">{errors.state.message}</span>
              )}
            </p>
          </div>
          </div>

           {/* country */}
           <div className={styles.loginForm}>
          <span className={styles.iconLabelStyle}>
            <label htmlFor={COUNTRY} className={styles.labelStyle}>
              Country
            </label>
          </span>
          <div>
          <select
          id="city"
                {...register(COUNTRY, clientFormValidators[COUNTRY])}
                className={styles.selectInputField}
        >
          <option value="">Select Country</option>
          {countryData?.map((country) => (
            <option key={country?.id} value={country?.name}>
              {country?.name}
            </option>
          ))}
     
        </select>
            <p className={styles.errorText}>
              {errors.country && (
                <span className="error">{errors.country.message}</span>
              )}
            </p>
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

export default Client
