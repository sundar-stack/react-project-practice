import React from "react";
import { Formik } from "formik";
import InputField from "./InputField";
import * as yup from "yup";

const formSchema = yup.object().shape({
  userName: yup.string().required("username required"),
  password: yup.string().required("passs required").min(8).max(12),
  language: yup.string().required("lang required"),
});

const Form = () => {
  return (
    <Formik
      initialValues={{
        userName: "",
        password: "",
        language: "",
      }}
      onSubmit={(data) => console.log("data", data)}
      validationSchema={formSchema}
    >
      {({ handleBlur, handleChange, handleSubmit, values, errors,touched }) => {
        // console.log(values);
        console.log(errors);

        return (
          <form onSubmit={handleSubmit}>
            <InputField
              name="userName"
              fieldname="Username"
              placeholder="Enter Username"
            />
            <InputField
              name="password"
              fieldname="Password"
              placeholder="Enter Password"
            />
            <select
              value={values.language}
              onChange={handleChange}
              onBlur={handleBlur}
              name="language"
            >
              <option value="" disabled>
                Select
              </option>
              <option value="eng">ENGLISH</option>
              <option value="chi">CHINA</option>
              <option value="ger">GERMANY</option>
            </select>
            {errors.language && touched.language && (
              <p style={{ color: "red" }}>{errors.language}</p>
            )}
          </form>
        );
      }}
    </Formik>
  );
};

export default Form;
