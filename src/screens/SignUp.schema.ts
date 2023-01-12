import { object, string, number, date, InferType } from 'yup'

let userSchema = object().shape({
  email: string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})

export default userSchema
