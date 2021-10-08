import React from "react";
import { Alert } from "antd";
export const Error = ({ mensaje }) => {
  return (
    <div>
      <Alert
        message="Error"
        type="error"
        description={mensaje}
       
        closable
      />
    </div>
  );
};
