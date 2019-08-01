import React, { useEffect, useState } from "react";
import { Result, Button } from "antd";

import { userApi } from "utils/api";
import { Block } from "components";

const renderTextInfo = (hash, verified) => {
  if (hash) {
    if (verified) {
      return {
        status: "success",
        message: "Аккаунт успешно подтвержден!"
      };
    } else {
      return {
        status: "error",
        message: "Ошибка при подтверждении аккаунта!"
      };
    }
  } else {
    return {
      status: "success",
      message: "Ссылка с подтверждением аккаунта отправлена на E-Mail."
    };
  }
};

const CheckEmailInfo = ({ location, history }) => {
  const [verified, setVerified] = useState(false);
  const hash = location.search.split("hash=")[1];
  const info = renderTextInfo(hash, verified);

  useEffect(() => {
    if (hash) {
      userApi.verifyHash(hash).then(({ data }) => {
        if (data.status === "success") {
          setVerified(true);
        }
      });
    }
  });

  return (
    <div>
      <Block>
        <Result
          status={info.status}
          title={info.status === "success" ? "Готово!" : "Ошибка"}
          subTitle={info.message}
          extra={
            info.status === "success" &&
            verified && (
              <Button type="primary" onClick={() => history.push("/signin")}>
                Войти
              </Button>
            )
          }
        />
      </Block>
    </div>
  );
};

export default CheckEmailInfo;
