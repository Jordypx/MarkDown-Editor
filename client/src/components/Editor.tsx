import React, { useState } from "react";
import Button from "./Button";
import ReactMarkdown from "react-markdown";

interface EditorProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  defaultValue: string;
}
const Editor = (props: EditorProps) => {
  const startingText = props.defaultValue ? props.defaultValue.toString() : "";
  const [text, setText] = useState(startingText);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="flex items-stretch h-[calc(100vh_-_72px)]">
      <div className="w-1/2 h-full">
        <div className="h-[42px] bg-custom-white-200 flex items-center border-r border-r-custom-grey-100 px-5">
          <span className="text-custom-text-heading-sm uppercase tracking-[2px] text-custom-grey-300">
            Markdown
          </span>
        </div>
        <textarea
          onChange={handleChange}
          className="w-full h-full resize-none focus:outline-none px-5 py-3 border-r border-r-custom-grey-100 font-roboto-mono font-light text-custom-text-heading-sm leading-[24px]"
          {...props}
        ></textarea>
      </div>

      <div className="w-1/2 h-full">
        <div className="h-[42px] bg-custom-white-200 flex items-center justify-between px-5">
          <span className="text-custom-text-heading-sm uppercase tracking-[2px] text-custom-grey-300">
            Preview
          </span>
          <Button
            mode="transparent"
            icon="show"
            aria-label="Hide Editor"
          ></Button>
        </div>
        <div className="w-full h-full p-5 overflow-y-auto md-rendered">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Editor;
