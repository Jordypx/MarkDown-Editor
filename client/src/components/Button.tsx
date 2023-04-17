import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode: "primary" | "transparent";
  text?: string;
  icon?: "save" | "add" | "delete" | "show" | "hide";
  w?: string;
}

const Button = (props: ButtonProps) => {
  let icon = "";
  let alt = "";

  switch (props.icon) {
    case "save":
      icon = "/src/assets/icon-save.svg";
      alt = "Save changes";
      break;
    case "add":
      icon = "/src/assets/icon-save.svg";
      alt = "Add new";
      break;
    case "delete":
      icon = "/src/assets/icon-delete.svg";
      alt = "Delete";
      break;
    case "show":
      icon = "/src/assets/icon-show-preview.svg";
      alt = "Delete";
      break;
    case "hide":
      icon = "/src/assets/icon-hide-preview.svg";
      alt = "Delete";
      break;
  }
  return (
    <button
      className={`${
        props.mode === "primary" ? "bg-custom-orange-400 hover:bg-custom-orange-300" : "bg-transparent"
      } text-custom-white-100 cursor-pointer text-custom-text-heading-md rounded py-3 px-4 flex items-center justify-center ease-in-out duration-300`}
      {...props}
    >
      {icon && (
        <img src={icon} alt={alt} className={props.text ? "mr-2" : ""} />
      )}
      {props.text}
    </button>
  );
};

export default Button;
