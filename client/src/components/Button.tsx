import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode: "primary" | "transparent";
  text?: string;
  icon?: "save" | "add" | "delete";
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
  }
  return (
    <button
      className={`${
        props.mode === "primary" ? "bg-custom-orange-400" : "bg-transparent"
      } text-custom-white-100 text-custom-text-heading-md rounded py-3 px-4 flex items-center justify-center`}
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
