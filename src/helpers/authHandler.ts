export const isLogged = () => {
  let token = localStorage.getItem("token");
  return token ? true : false;
};

export const isLoggedAdm = () => {
  let token = localStorage.getItem("token");
  return token ? true : false;
};
