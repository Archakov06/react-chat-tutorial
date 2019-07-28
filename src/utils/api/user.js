import { axios } from "core";

export default {
  login: postData => axios.post("/user/login", postData),
  getMe: () => axios.get("/user/me")
};
