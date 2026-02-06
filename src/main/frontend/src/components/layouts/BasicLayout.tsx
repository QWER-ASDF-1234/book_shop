import React from "react";
import Header from "./BasicHeader";

// 일반 회원용 Layout. header, body만 존재
const BasicLayout = () => {
  return (
    <div className="m-auto w-[1600px] border border-solid border-zinc-500">
      <Header />
      <div className="mt-5">body</div>
    </div>
  );
};

export default BasicLayout;
