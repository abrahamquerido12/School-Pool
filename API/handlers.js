import API from './http-common';

export const login = async (email, password) => {
  return await API.post('/auth/signin', {
    email,
    password,
  });
};

export const signup = async (data) => {
  return await API.post('/auth/signup', {
    ...data,
  });
};

export const updateUser = async (id, data) => {
  return await API.patch(`/user/${id}`, {
    data,
  });
};
