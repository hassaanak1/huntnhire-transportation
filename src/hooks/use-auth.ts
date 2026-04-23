export const useAuth = () => ({
  isAuthenticated: false as boolean,
  isLoading: false as boolean,
  signinRedirect: async () => {},
  removeUser: async () => {},
  error: null as Error | null,
});
export const useUser = () => null;
