import React from "react";
import PropTypes from "prop-types";
import { Button as BaseButton } from "antd";
import classNames from "classnames";

import "./Button.scss";

const Button = props => (
  <BaseButton
    {...props}
    className={classNames("button", props.className, {
      "button--large": props.size === "large"
    })}
  />
);

Button.propTypes = {
  className: PropTypes.string
};

export default Button;
