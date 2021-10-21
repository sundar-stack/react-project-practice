import React, { useState } from "react";
import { Formik } from "formik";
import InputField from "./InputField";
import * as yup from "yup";
import { TimePicker } from "antd";
import { DatePicker, Space } from "antd";
import moment from "moment";

const formSchema = yup.object().shape({
  // userName: yup.string().required("username required"),
  // password: yup.string().required("passs required").min(8).max(12),
  // language: yup.string().required("lang required"),
  // textarea: yup.string().required("enter textarea"),
  time: yup.string().required("enter time"),
});
const dateFormat = "YYYY-MM-DD";
const FormikComponent = () => {
  const [inputStates, setInputStates] = useState({
    userName: "",
    password: "",
    language: "",
    textarea: "",
    calender: "2021-10-13",
    time: "00:00:00",
  });

  function onChange(time: any, timeString: any) {
    console.log(timeString);
    setInputStates({ ...inputStates, time: timeString });
  }

  const handle = (data: any) => {
    console.log("data", data);
    console.log(inputStates);
    // ///2021-10-13
    console.log(new Date(data.calender).getDate());

    // let mainDate = inputStates.calender;
    // console.log(mainDate);
    // let date = new Date(mainDate).getDate();
    // let month = new Date(mainDate).getMonth();
    // let year = new Date(mainDate).getFullYear();
    // let final = `${year}-${month}-${date}`;
    // console.log(final);
  };

  // function onChange(date: any, dateString: any) {
  //   console.log(dateString);
  //   console.log(new Date(dateString).getDate());
  //   setInputStates({ ...inputStates, time: dateString });
  // }

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

            {/* <InputField
              name="time"
              fieldname="time"
              placeholder="En"
              type="time"
              step="0.001"
              // min="00:30:01"
              // max="02:30:02"
            /> */}

            {/* <TimePicker use12Hours onChange={handleChange} /> */}

            {/* <DatePicker
              onChange={onChange}
              defaultValue={moment(inputStates.time, dateFormat)}
            />
            {errors.time && touched.time && (
              <p style={{ color: "red" }}>{errors.time}</p>
            )} */}

            <TimePicker
              onChange={onChange}
              defaultValue={moment(inputStates.time, "HH:mm:ss")}
              defaultOpenValue={moment("00:30:00", "HH:mm:ss")}
            />

            <button type="submit">handle</button>
          </form>
        );
      }}
    </Formik>
  );
};

export default FormikComponent;
