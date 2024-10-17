import React, { FC } from "react";

const Container: FC<{ children: React.ReactNode }> = ({ children }) => {
  //container wraps App
  return <div className="container">{children}</div>;
};

export default Container;
