import Axios from "axios";

export const state = () => ({
  auth: sessionStorage.getItem("authToken") || null,
  admin: JSON.parse(sessionStorage.getItem("admin")) || null
});

export const mutations = {
  async setAuth(state, token) {
    sessionStorage.setItem("authToken", token);
    Axios.defaults.headers.authorization = `Bearer ${token}`;
    state.auth = token;

    try {
      let res = await Axios.get("/user");
      state.admin = res.data.user;
      sessionStorage.setItem("admin", JSON.stringify(res.data.user));
    } catch (error) {
      console.log(error);
    }
    this.$router.push("/");
  },
  async removeToken(state, token = null) {
    try {
      let res = await Axios.post("/logout");
      sessionStorage.removeItem("authToken");
      sessionStorage.removeItem("admin");
      Axios.defaults.headers.authorization = null;
      state.auth = null;
      state.admin = null;
      this.$router.push("/login");
    } catch (error) {
      sessionStorage.removeItem("authToken");
      Axios.defaults.headers.authorization = null;
      state.auth = null;
      state.admin = null;
      sessionStorage.removeItem("admin");

      this.$router.push("/login");
    }
  }
};

export const strict = false;
