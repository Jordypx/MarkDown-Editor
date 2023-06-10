import React from "react";
import Button from "./Button";
import FileDetaiil from "./FileDetaiil";

function Sidebar() {
  return (
    <div className="bg-custom-dark-300 w-[250px] h-full overflow-x-hidden overflow-y-auto p-5 ease-in-out duration-300">
      <span className="uppercase text-custom-grey-300 text-custom-text-heading-sm block tracking-[2px] mb-6">
        My Documents
      </span>
      <Button mode="primary" w="full">
        + New Document
      </Button>

      <div className="mt-4">
        <FileDetaiil />
      </div>
    </div>
  );
}

export default Sidebar;
