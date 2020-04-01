import React from "react";
import PropTypes from "prop-types";
import readedSvg from "assets/img/readed.svg";
import noReadedSvg from "assets/img/noreaded.svg";

const IconReaded = ({ isMe, isReaded }) => {
  const mappingIsReaded = {
    true: <img className="message__icon-readed" src={readedSvg} alt="Readed icon" />,
    false: (
      <img
        className="message__icon-readed message__icon-readed--no"
        src={noReadedSvg}
        alt="No readed icon"
      />
    ),
  };
  const mappingIsMe = {
    true: mappingIsReaded[isReaded],
    false: null,
  };
  return mappingIsMe[isMe];
};

IconReaded.propTypes = {
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool
};

export default IconReaded;
