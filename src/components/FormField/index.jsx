import React from "react";
import { Form, Icon, Input } from "antd";

import { validateField } from "utils/helpers";

const FormField = ({
  name,
  placeholder,
  icon,
  type,
  handleChange,
  handleBlur,
  touched,
  errors,
  values
}) => {
  return (
    <Form.Item
      validateStatus={validateField(name, touched, errors)}
      help={!touched[name] ? "" : errors[name]}
      hasFeedback
    >
      <Input
        id={name}
        prefix={<Icon type={icon} style={{ color: "rgba(0,0,0,.25)" }} />}
        size="large"
        placeholder={placeholder}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        type={type}
      />
    </Form.Item>
  );
};

export default FormField;
