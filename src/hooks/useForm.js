import { useState } from "react";

export default function useForm(INIT_STATE) {
  const [formData, setFormData] = useState(INIT_STATE);
  const [isDataValid, setIsDataValid] = useState(true);

  const onInputChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const resetForm = (e) => {
    setFormData(INIT_STATE);
  };

  const isSubmitDisabled = () => {
    return formData.body.trim() === "";
  };

  return {
    formData,
    onInputChange,
    resetForm,
    isSubmitDisabled,
    isDataValid,
    setIsDataValid,
  };
}
