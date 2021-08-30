import * as yup from "yup";

const SignUpSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required"),
  username: yup.string().required("Username is required"),
});

export default SignUpSchema;