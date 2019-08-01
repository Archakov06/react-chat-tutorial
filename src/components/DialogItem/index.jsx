import React from "react";
import classNames from "classnames";
import format from "date-fns/format";
import isToday from "date-fns/is_today";
import { Link } from "react-router-dom";

import { IconReaded, Avatar } from "../";

const getMessageTime = created_at => {
  if (isToday(created_at)) {
    return format(created_at, "HH:mm");
  } else {
    return format(created_at, "DD.MM.YYYY");
  }
};

const DialogItem = ({
  _id,
  undread,
  created_at,
  text,
  isMe,
  currentDialogId,
  onSelect,
  lastMessage
}) => (
  <Link to={`/dialog/${_id}`}>
    <div
      className={classNames("dialogs__item", {
        "dialogs__item--online": lastMessage.user.isOnline,
        "dialogs__item--selected": currentDialogId === _id
      })}
      onClick={onSelect.bind(this, _id)}
    >
      <div className="dialogs__item-avatar">
        <Avatar user={lastMessage.user} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{lastMessage.user.fullname}</b>
          <span>{getMessageTime(lastMessage.created_at)}</span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{lastMessage.text}</p>
          {isMe && <IconReaded isMe={true} isReaded={false} />}
          {lastMessage.undread > 0 && (
            <div className="dialogs__item-info-bottom-count">
              {lastMessage.undread > 9 ? "+9" : lastMessage.undread}
            </div>
          )}
        </div>
      </div>
    </div>
  </Link>
);

export default DialogItem;
