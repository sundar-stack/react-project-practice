import React, { useState } from "react";
import { Formik } from "formik";
import InputField from "./InputField";
import * as yup from "yup";

const formSchema = yup.object().shape({
  // userName: yup.string().required("username required"),
  // password: yup.string().required("passs required").min(8).max(12),
  // language: yup.string().required("lang required"),
  // textarea: yup.string().required("enter textarea"),
});

const FormikComponent = () => {
  const [inputStates, setInputStates] = useState({
    userName: "",
    password: "",
    language: "",
    textarea: "",
    calender: "",
  });

  const handle = (data: any) => {
    console.log("data", data);

    // ///2021-10-13

    // let mainDate = inputStates.calender;
    // console.log(mainDate);
    // let date = new Date(mainDate).getDate();
    // let month = new Date(mainDate).getMonth();
    // let year = new Date(mainDate).getFullYear();
    // let final = `${year}-${month}-${date}`;
    // console.log(final);
  };
  return (
    <Formik
      initialValues={inputStates}
      onSubmit={handle}
      validationSchema={formSchema}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
      }) => {
        // console.log(values);
        console.log(errors);

        return (
          <form onSubmit={handleSubmit}>
            <InputField
              name="userName"
              fieldname="Username"
              placeholder="Enter Username"
              type="number"
            />
            <InputField
              name="password"
              fieldname="Password"
              placeholder="Enter Password"
              type="password"
            />
            <textarea
              name="textarea"
              placeholder="textarea"
              value={values.textarea}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.textarea && touched.textarea && (
              <p style={{ color: "red" }}>{errors.textarea}</p>
            )}
            <select
              value={values.language}
              onChange={handleChange}
              onBlur={handleBlur}
              name="language"
            >
              <option value="" disabled>
                Select
              </option>
              <option value="1">ENGLISH</option>
              <option value="2">CHINA</option>
              <option value="3">GERMANY</option>
            </select>
            {errors.language && touched.language && (
              <p style={{ color: "red" }}>{errors.language}</p>
            )}

            <InputField
              name="calender"
              fieldname="calender"
              placeholder="Enter date"
              type="date"
            />
            <button type="submit">handle</button>
          </form>
        );
      }}
    </Formik>
  );
};

export default FormikComponent;
