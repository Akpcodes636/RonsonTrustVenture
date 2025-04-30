"use client";
import Image from "next/image";
import InputField from "../ui/InputField";
import Button from "../ui/Button";
import { useFormik } from "formik";
import { useStep } from "@/app/zustand/store";

export default function Form() {
  const { step, setStep } = useStep();

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
    onSubmit: async (values) => {
      // Log form values to check
      console.log("Form values:", values);

      try {
        const response = await fetch("/api/submit-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        let result;

        try {
          result = await response.json();
        } catch (jsonError) {
          console.error("Could not parse JSON response:", jsonError);
          throw new Error("Invalid server response");
        }

        if (response.ok) {
          console.log("Order saved successfully:", result.message);
          setStep(step + 1);
        } else {
          console.error(
            "Server responded with an error:",
            result.error || "Unknown error"
          );
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
          console.error("Error submitting order:", error.message);
        } else {
          console.error("Error submitting order:", error);
        }
      }
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
        <div className="mx-auto max-w-[358px] lg:min-w-[711px] h-auto bg-[#F4F4F4] rounded-[5px]">
          <div className="py-[32px] px-[18px] lg:p-[52px] flex flex-col gap-4">
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
              <div className="flex-1 hidden lg:block">
                <InputField
                  name="alternativePhoneNumber"
                  label="AlternativePhoneNumber"
                  value={formik.values.alternativePhoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>

            <div className="flex gap-[30px]">
              <div className="flex-1">
                <InputField
                  name="state"
                  label="State"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="flex-1">
                <InputField
                  name="city"
                  label="City"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Button
                style="primary"
                type="submit"
                css="w-[182px] h-[48px] rounded-[5px]"
                fn={() => setStep(step + 1)}
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
