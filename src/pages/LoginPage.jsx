import React, { useContext } from "react";
import useForm from "../hooks/useForm";
import LoginForm from "../components/forms/LoginForm";
import { INIT_STATE_LOGIN } from "../constants/InitialStates";
import AuthContext from "../context/AuthContext";
import { LoginFormValidation } from "../common/validators/LoginFormValidation";

const LoginPage = () => {
  const { formData, onInputChange, setIsDataValid, isDataValid } =
    useForm(INIT_STATE_LOGIN);
  const { logIn } = useContext(AuthContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = LoginFormValidation(formData);
    if (!isValid) {
      setIsDataValid(false);
      return;
    }
    setIsDataValid(true);
    logIn(formData);
  };

  return (
    <div>
      <LoginForm
        formData={formData}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        isDataValid={isDataValid}
      />
    </div>
  );
};

export default LoginPage;
