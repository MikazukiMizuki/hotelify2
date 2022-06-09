import React from "react";
import Register from "../../components/Register/Register";
import { Page } from "../../types";

const index: Page = () => {
  return (
      <Register />
  );
};

index.getLayout = (page) => (<>{page}</>);

export default index;
