import React, { useState, useEffect } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";

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
    <React.Fragment>
      <Header />
      {content && <Editor defaultValue={content} />}
    </React.Fragment>
  );
};

export default App;
