import * as Yup from "yup";
export const OrderSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  address: Yup.string().required("Address is required"),
  phoneNumber: Yup.string()
    .matches(/^\d{11}$/, "Phone number must be 11 digits")
    .required("Phone number is required"),
  alternativePhoneNumber: Yup.string().matches(
    /^\d{11}$/,
    "Alternative number must be 11 digits"
  ),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
});
