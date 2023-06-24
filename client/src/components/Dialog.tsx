import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

const Backdrop = () => {
  return (
    <div className="fixed bg-custom-dark-400 opacity-50 left-0 top-0 w-full h-full z-10"></div>
  );
};

const ModalDialog = () => {
  return (
    <div className="bg-custom-white-100 antialiased rounded-[4px] px-6 py-7 z-20  w-[380px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h2 className="text-custom-dark-100 text-custom-text-heading-dialog font-roboto-slab font-bold">
        Delete this document?
      </h2>
      <p className="text-custom-grey-300 text-sm leading-6 my-6 font-roboto-slab">
        Are you sure you want to delete the &apos;welcome.md&apos; document and
        its contents? This action cannot be reversed.
      </p>
      <Button mode="primary" w="full">Confirm &amp; Delete</Button>
    </div>
  );
};

const Dialog = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop")!
      )}
      {ReactDOM.createPortal(
        <ModalDialog />,
        document.getElementById("modal")!
      )}
    </>
  );
};

export default Dialog;
