import React, { useState, useEffect } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setContent(data[data.length - 1].content);
      })
      .catch((err) => {
        console.log("Something went wrong" + err);
      });
  }, [content]);

  return (
    <div className="grid grid-cols-[250px_auto] overflow-hidden">
      <Sidebar />
      <div className="w-100">
        <Header />
        {content && <Editor defaultValue={content} />}
      </div>
    </div>
  );
};

export default App;
