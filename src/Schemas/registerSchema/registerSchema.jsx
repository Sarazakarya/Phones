import * as yup from "yup";
const registerSchema = yup.object().shape({
  name: yup.string().required("Please fill your Data"),
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(8, "Password Must be At least 8 Charachter"),
  confirmpassword: yup
    .string()
    .required("Please fill your Data")
    .min(8)
    .oneOf([yup.ref("password")], "Password is not match"),
});
export default registerSchema;
