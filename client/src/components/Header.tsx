import React from "react";
import Button from "./Button";
import FileDetaiil from "./FileDetaiil";

const Header = () => {
  return (
    <div className="w-screen h-[72px] bg-red-100 bg-custom-dark-200  flex items-center justify-between pr-4">
      <div className="flex h-full items-center">
        <button className="w-[72px] h-full flex justify-center items-center bg-custom-dark-100 mr-6">
          <img src="src/assets/icon-menu.svg" />
        </button>
        <a href="/">
          <img src="/src/assets/logo.svg" alt="Markdown" />
        </a>
        <span className="w-px h-10 bg-custom-grey-400 block mx-6"></span>
        <FileDetaiil />
      </div>

      <div className="flex items-center">
        <Button mode='transparent' icon='delete' className='mr-6' />
        <Button mode='primary' icon='save' text='Save Changes' />
      </div>
    </div>
  );
};

export default Header;
