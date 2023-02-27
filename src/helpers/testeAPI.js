import Cookies from "js-cookie";
import qs from "qs";

const BASEAPI = "http://localhost:3000";

const apiFetchPost = async (endpoint, body) => {
  if (!body.token) {
    let token = Cookies.get("token");
    if (token) {
      body.token = token;
    }
  }
  const res = await fetch(BASEAPI + endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const json = await res.json();

  if (json.notallowed) {
    window.location.href = "/login";
    return;
  }
};

const apiFetchGet = async (endpoint, body = []) => {
  if (!body.token) {
    let token = Cookies.get("token");
    if (token) {
      body.token = token;
    }
  }
  const res = await fetch(`${BASEAPI + endpoint}?${qs.stringify(body)}`);
  const json = await res.json();

  if (json.notallowed) {
    window.location.href = "/login";
    return;
  }
};

const testeAPI = {
  login: async (email, password) => {
    return { error: "Funcionalidade incompleta" };

    /*const json = await apiFetchPost("/login", { email, password });
    return json;*/
  },
};

export default () => testeAPI;
