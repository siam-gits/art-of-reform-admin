export const isAuthenticated = () => {
  return localStorage.getItem("token") === "logged-in";
};

export const login = () => {
  localStorage.setItem("token", "logged-in");
};

export const logout = () => {
  localStorage.removeItem("token");
};
