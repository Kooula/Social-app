export const LoginFormValidation = (formData) => {
  const { userName, password } = formData;
  if (!userName || !password) return false;

  return true;
};
