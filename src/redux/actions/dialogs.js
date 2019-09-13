import { dialogsApi } from "utils/api";
import socket from "core/socket";

const Actions = {
  setDialogs: items => ({
    type: "DIALOGS:SET_ITEMS",
    payload: items
  }),
  setCurrentDialogId: id => dispatch => {
    socket.emit("DIALOGS:JOIN", id);
    dispatch({
      type: "DIALOGS:SET_CURRENT_DIALOG_ID",
      payload: id
    });
  },
  fetchDialogs: () => dispatch => {
    dialogsApi.getAll().then(({ data }) => {
      dispatch(Actions.setDialogs(data));
    });
  }
};

export default Actions;
