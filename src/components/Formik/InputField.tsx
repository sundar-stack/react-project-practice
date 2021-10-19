import React, { FC } from "react";
import { useField } from "formik";

interface inputProps {
  name: string;
  fieldname: string;
  placeholder: string;
  type:string
}

const InputField: FC<inputProps> = ({ fieldname, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.name}>{fieldname}</label>
      <input id={props.name} {...field} {...props} />
      {meta.error && meta.touched && <p style={{color:"red"}}>{meta.error}</p>}
    </div>
  );
};

export default InputField;
