"use client";
import Image from "next/image";
import InputField from "../ui/InputField";
import SelectField from "../ui/SelectField";
import Button from "../ui/Button";
import { useFormik } from "formik";
import {
  stateOptions,
  cityOptionsMap,
} from "../utilis/contents/HomePage.content";

export default function Form() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      address: "",
      phoneNumber: "",
      alternativePhoneNumber: "",
      state: "",
      city: "",
    },
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
    validate: (values) => {
      const errors: Partial<typeof values> = {};
      if (!values.fullName) errors.fullName = "Full name is required";
      if (!values.email) errors.email = "Email is required";
      if (!values.address) errors.address = "Address is required";
      if (!values.state) errors.state = "State is required";
      if (!values.city) errors.city = "City is required";
      return errors;
    },
  });

  const currentCityOptions = cityOptionsMap[formik.values.state] || [];

  return (
    <div className="container-sm mx-auto pt-[120px] pb-[200px]">
      <div className="flex items-center gap-[18px] justify-center mb-[32px]">
        <span>
          <Image
            src="/image/truck.svg"
            width={500}
            height={500}
            alt="icon"
            className="object-contain w-[32px] h-[32px] text-center"
          />
        </span>
        <h1 className="font-semibold text-[24px] text-[#4A4A4A]">
          Delivery Address
        </h1>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="mx-auto max-w-[711px] h-auto bg-[#F4F4F4] rounded-[5px]">
          <div className="p-[52px] flex flex-col gap-4">
            <InputField
              name="fullName"
              label="Name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fullName ? formik.errors.fullName : null}
            />

            <InputField
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email ? formik.errors.email : null}
            />

            <InputField
              name="address"
              label="Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address ? formik.errors.address : null}
            />

            <div className="flex items-start justify-start gap-[30px]">
              <div className="flex-1">
                <InputField
                  name="phoneNumber"
                  label="Phone Number"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="flex-1">
                <InputField
                  name="alternativePhoneNumber"
                  label="Alternative Phone Number"
                  value={formik.values.alternativePhoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>

            <div className="flex gap-[30px]">
              <div className="flex-1">
                <SelectField
                  name="state"
                  label="State"
                  options={stateOptions}
                  value={formik.values.state}
                  onChange={(e) => {
                    formik.handleChange(e);
                    formik.setFieldValue("city", "");
                  }}
                  onBlur={formik.handleBlur}
                  error={formik.touched.state ? formik.errors.state : null}
                />
              </div>
              <div className="flex-1">
                <SelectField
                  name="city"
                  label="City"
                  options={currentCityOptions}
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.city ? formik.errors.city : null}
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Button
                style="primary"
                type="submit"
                css="w-[182px] h-[48px] rounded-[5px]"
              >
                Proceed to Payment
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
