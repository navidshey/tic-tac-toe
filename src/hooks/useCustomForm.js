import { useState, useEffect, useRef } from "react";

/**A custom hook for generating forms, by receiving initial data, it prepare the form
 * 
 * @param initialValues - based on the elements inside the form, it receives initial value for each of them
 * @param errors - based on the elements inside the form, it receives initial value for each of them and can set error whenever the value of element is invalid
 * @param validation - a callback function to validate all elements inside the form
 * @param onSubmit - a callback function to call when form submitted
 * 
 * @returns an object containing values, errors, touched, handleChange, handleBlur, handleSubmit, handleFormClear, setValues  of the form
 */
export const useCustomForm = ({
  initialValues,
  errorValues,
  validation,
  onSubmit,
}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(errorValues || {});
  const [touched, setTouched] = useState({});
  const [onSubmitting, setOnSubmitting] = useState(false);

  const formRendered = useRef(true);

  useEffect(() => {
    if (formRendered.current) {
      setValues(initialValues);
      setErrors({});
      setTouched({});
      setOnSubmitting(false);
    }
    formRendered.current = false;
  }, [initialValues]);

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    setValues({ ...values, [name]: value });
    if (onSubmitting) {
      let errs = validation({ ...values, [name]: value });
      setErrors(errs.errors);
    }
  };

  const handleBlur = (event) => {
    const { target } = event;
    const { name } = target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setOnSubmitting(true);
    let inputs = validation(values);
    if (inputs.isValid) {
      onSubmit(values, errors);
    } else {
      setErrors(inputs.errors);
    }
  };

  const handleFormClear = () => {
    setValues(initialValues);
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    handleFormClear,
    setValues,
  };
};

export default useCustomForm;
