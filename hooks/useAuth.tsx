import React, { Dispatch, SetStateAction } from 'react';

interface AuthContextProps {
  user: any;
  setUser: (user: any) => void;
  token: string | null;
  setToken: Dispatch<SetStateAction<null>>;
}

const AuthContext = React.createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);

  const values = {
    user,
    setUser,
    token,
    setToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext);
