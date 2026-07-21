import { createContext, Dispatch, SetStateAction } from "react";

interface AuthContextProps {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}

export const AuthProvider = createContext<AuthContextProps>({
  isAuth: false,
  setIsAuth: () => {},
});
