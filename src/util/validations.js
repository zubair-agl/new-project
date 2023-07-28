import * as yup from 'yup'

// function to show validations error
const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} character`;
};

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
    .matches(/[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g, getCharacterValidationError("special character"))
    .required('Password is required'),
})