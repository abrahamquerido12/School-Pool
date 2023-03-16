export const validateData = (data: {
  name: string;
  email: string;
  firstLastName: string;
  secondLastName: string;
  password: string;
}) => {
  const { name, email, firstLastName, secondLastName, password } = data;
  if (!name || !email || !firstLastName || !secondLastName || !password) {
    return false;
  }
  return true;
};
