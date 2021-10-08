import React from "react";
import {Spin, Alert } from "antd";
export const Loading = ({description}) => {
  return (
    <>
      <Spin tip="Loading..." size="large">
        <Alert
          message="Espere."
          description={description}
          type="info"
        />
      </Spin>
    </>
  );
};
