import { useState } from 'react';

export const useFormState = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const resetForm = () => setFormData(initialValues);

  return { formData, handleChange, resetForm };
};
