import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import Folder from "./Folder";
import { useState } from "react";

const Sidebar = () => {
  const [showFolder, setShowFolder] = useState(false);
  return (
    <div className="bg-indigo-800 w-2/6 p-2 pl-4">
      <div className="flex gap-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="title">
        <h2 className="text-gray-400 text-xl font-medium py-5">
          File Explorer
        </h2>
        <div className="flex gap-3">
          <div className="bg-indigo-500 text-gray-300 text-sm px-2 py-2 rounded-md">
            Workspace/main_content
          </div>
          <button className="border-[1px] border-indigo-500 rounded-md px-2 py-2">
            <IoCloudUploadOutline className="bg-indigo-800" />
          </button>
        </div>
        <div className=" border-[1px] my-5 border-indigo-500 rounded-md">
          <input
            placeholder="New"
            className="bg-transparent px-3 py-1 outline-none text-indigo-200"
            type="text"
          />
        </div>
      </div>
      <div>
        <div
          className="head_folder cursor-pointer"
          onClick={() => setShowFolder(!showFolder)}
        >
          <Folder />
        </div>
        {showFolder ? (
          <div className="sub_folders pl-3">
            {[1, 2, 3].map((i) => {
              return (
                <div>
                  <Folder />
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        <div className="head_folder">
          <Folder />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
