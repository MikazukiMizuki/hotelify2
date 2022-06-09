import React from "react";
import Login from "../../components/Login/Login";
import { Page } from "../../types";

const index: Page = () => {
  return (
      <Login />
  );
};

index.getLayout = (page) => (<>{page}</>);

export default index;
