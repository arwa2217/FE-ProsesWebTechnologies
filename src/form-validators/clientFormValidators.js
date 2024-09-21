import {NAME,PHONE_NUMBER,CITY,STATE,COUNTRY } from "../constant/formData";

export const clientFormValidators = {
  [NAME]: {
    required: 'Please enter name',
  },
  [PHONE_NUMBER]: {
    required: 'Please enter phone number',
    pattern: {
              value: /^[0-9]{10}$/,
              message: "Enter a valid 10-digit mobile number"
            }
    },
  
   [CITY]: {
    required: 'Please select city',
    },
    [STATE]: {
    required: 'Please select state',
    },
     [COUNTRY]: {
    required: 'Please select country',
  },
};