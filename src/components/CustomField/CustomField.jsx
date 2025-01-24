import { ErrorMessage, Field } from "formik";
import s from "../ContactForm/ContactForm.module.css";

const CustomField = ({ label, type = "text", name }) => {
  return (
    <label className={s.labelContactForm}>
      <span>{label}</span>
      <Field className={s.inputContactForm} type={type} name={name} />
      <ErrorMessage name={name} component="div" className={s.errorMessage} />
    </label>
  );
};

export default CustomField;
