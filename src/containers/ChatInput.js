import React from "react";
import { connect } from "react-redux";

import { ChatInput as ChatInputBase } from "components";

import { messagesActions } from "redux/actions";

const ChatInput = ({ fetchSendMessage, currentDialogId }) => {
  return (
    <ChatInputBase
      onSendMessage={fetchSendMessage}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(
  ({ dialogs }) => dialogs,
  messagesActions
)(ChatInput);
