import React from "react";
import { FaFolder } from "react-icons/fa";

const Folder = () => {
  return (
    <div className="flex pl-4 items-center gap-3 text-gray-400">
      <FaFolder color="yellow" />
      <span>main_content</span>
    </div>
  );
};

export default Folder;
