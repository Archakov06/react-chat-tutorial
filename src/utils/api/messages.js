import { axios } from "core";

export default {
  getAllByDialogId: id => axios.get("/messages?dialog=" + id)
};
