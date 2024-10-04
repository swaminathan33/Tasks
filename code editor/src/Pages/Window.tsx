import React from "react";
import Sidebar from "../Components/Sidebar";
import Editor from "../Components/Editor";

const Window = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Editor />
    </div>
  );
};

export default Window;
