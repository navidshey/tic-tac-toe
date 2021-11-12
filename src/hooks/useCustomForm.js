import { useState, useEffect, useRef } from "react";

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
