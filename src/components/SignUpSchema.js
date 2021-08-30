import * as yup from "yup";

const SignUpSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Must be 4 characters"),
  username: yup.string().required("Username is required"),
});

export default SignUpSchema;