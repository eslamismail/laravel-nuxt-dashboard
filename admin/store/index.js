// import { stat } from "fs-extra";

export const state = () => ({
  auth: null
});

export const mutations = {
  setAuth(state, token) {
    state.auth = token;
  }
};
