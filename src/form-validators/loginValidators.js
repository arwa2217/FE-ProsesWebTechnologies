import { EMAIL, PASSWORD } from "../constant/formData";

export const loginValidators = {
  [EMAIL]: {
    required: 'Email is required',
    pattern: {
      value: /^\S+@\S+$/i,
      message: 'Please enter a valid email address',
    },
  },
  [PASSWORD]: {
    required: 'Password is required',
    minLength: {
      value: 6,
      message: 'Password must be at least 6 characters long',
    },
  },
};