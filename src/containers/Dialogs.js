import React, { useState } from "react";
import { Dialogs as BaseDialogs } from "components";

const Dialogs = ({ items, userId }) => {
  const [inputValue, setValue] = useState("");
  const [filtred, setFiltredItems] = useState(Array.from(items));

  const onChangeInput = value => {
    setFiltredItems(
      items.filter(
        dialog =>
          dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setValue(value);
  };

  return (
    <BaseDialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
    />
  );
};

export default Dialogs;
