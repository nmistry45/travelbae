/**
 * Author : Trushita Maurya
 * Created context to pass user information to all child components
 */
import { createContext } from "react";

/**
 * Initialized the context props to be passed to child components
 */
export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
  loadUserProfile: () => {},
});
