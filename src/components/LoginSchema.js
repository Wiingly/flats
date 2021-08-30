import * as yup from 'yup'

const LoginSchema = yup.object().shape({
    username: yup.string()
    .required("Valid username is required"),
    password: yup.string().required('Password is required'),
})

export default LoginSchema