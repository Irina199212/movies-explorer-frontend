import React, { useCallback } from 'react';

export function useFormWithValidation(
  validators,
  initValues = {},
  validForm = false
) {
  const [values, setValues] = React.useState(initValues);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(validForm);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setValues({ ...values, [name]: value });

    if (validators && validators[name] && value !== '') {
      !validators[name].validate(value)
        ? setErrors({ ...errors, [name]: validators[name].message })
        : setErrors({ ...errors, [name]: '' });
    }
    setIsValid(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, errors, handleChange, isValid, resetForm };
}
