import { CONFIRM_PASSWORD, EMAIL, PASSWORD } from "../constant/formData";

export const loginValidators = {
  [EMAIL]: {
    required: 'Please enter email',
    pattern: {
      value: /^\S+@\S+$/i,
      message: 'Please enter a valid email address',
    },
  },
  [PASSWORD]: {
    required: 'Please enter password',
    minLength: {
      value: 6,
      message: 'Password must be at least 6 characters long',
    },
  },
   [CONFIRM_PASSWORD]: {
     required: 'Please re-enter password',
  },
};