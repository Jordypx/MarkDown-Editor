import React, { useEffect, useState, useRef } from "react";
import Button from "./Button";
import ReactMarkdown from "react-markdown";

interface EditorProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
}
const Editor = (props: EditorProps) => {
  const [text, setText] = useState(props.value);
  const [isFullWidthPrevieOn, setIsFullWidthPrevieOn] = useState(false);
  // const editorRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    setText(props.value);
  }, [props.value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="flex items-stretch h-[calc(100vh_-_72px)]">
      {!isFullWidthPrevieOn && (
        <div className="w-1/2 h-full">
          <div className="h-[42px] bg-custom-white-200 flex items-center border-r border-r-custom-grey-100 px-5">
            <span className="text-custom-text-heading-sm uppercase tracking-[2px] text-custom-grey-300">
              Markdown
            </span>
          </div>
          <textarea
            onChange={handleChange}
            className="w-full h-full resize-none focus:outline-none px-5 py-3 border-r border-r-custom-grey-100 font-roboto-mono font-light text-custom-text-heading-sm leading-[24px]"
            // ref={editorRef}
            {...props}
            value={text}
          ></textarea>
        </div>
      )}
      <div className={`${isFullWidthPrevieOn ? "w-full" : "w-1/2"} h-auto`}>
        <div className="h-[42px] bg-custom-white-200 flex items-center justify-between px-5">
          <span className="text-custom-text-heading-sm uppercase tracking-[2px] text-custom-grey-300">
            Preview
          </span>
          <Button
            onClick={() => setIsFullWidthPrevieOn(!isFullWidthPrevieOn)}
            mode="transparent"
            icon={isFullWidthPrevieOn ? "hide" : "show"}
            aria-label="Hide Editor"
          ></Button>
        </div>
        <div className="w-full h-full p-5 overflow-y-auto md-rendered">
          <div className={`${isFullWidthPrevieOn ? "w-1/2 mx-auto" : "w-full"} h-auto`}>
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
