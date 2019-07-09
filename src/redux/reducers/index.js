import { combineReducers } from "redux";

import dialogs from "./dialogs";
import messages from "./messages";

export default combineReducers({
  dialogs,
  messages
});
