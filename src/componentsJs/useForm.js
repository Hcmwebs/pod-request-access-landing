import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  /*=== setup the email address value ===*/
  const [values, setValues] = useState({
    email: '',
  });

  /*===  set the errors ===*/
  const [errors, setErrors] = useState({});

  /*===  set state when submitting  ===*/

  const [isSubmitting, setIsSubmitting] = useState(false);

  /*=== update the values when one inputs the email address === */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  /*=== Submitting the form ===*/

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  /*=== display the errors if any  ===*/

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  });

  return {
    handleChange,
    values,
    handleSubmit,
    errors,
  };
};

export default useForm;
