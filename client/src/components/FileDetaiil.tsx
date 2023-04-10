import React from "react";

const FileDetaiil = () => {
  return (
    <div className="flex items-center">
      <img src="/src/assets/icon-document.svg" alt="File name" />
      <div className="ml-5">
        <span className="text-custom-grey-300 font-extralight text-custom-text-body leading-none">
          Document Name
        </span>
        <span className="text-custom-white-100 custom-text-heading-md block">
          welcome.md
        </span>
      </div>
    </div>
  );
};

export default FileDetaiil;
