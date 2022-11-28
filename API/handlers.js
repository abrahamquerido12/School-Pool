import API from "./http-common";

export const login = async (email, password) => {
  // use axios to post to the login endpoint
  return await API.post("/auth/signin", {
    email,
    password,
  });
};
