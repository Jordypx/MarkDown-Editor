import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Editor from "./components/Editor";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { RootState } from "./store";

const App = () => {
  // const [content, setContent] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const content = useSelector((state: RootState) => state.data.content);

  // useEffect(() => {
  //   fetch("/data.json")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setContent(data[data.length - 1].content);
  //     })
  //     .catch((err) => {
  //       console.log("Something went wrong" + err);
  //     });
  // }, [content]);

  return (
    <div
      className={`grid ${
        isSidebarOpen ? "grid-cols-[250px_auto]" : ""
      } overflow-hidden`}
    >
      {isSidebarOpen && <Sidebar />}
      <div className="w-100">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {content && <Editor defaultValue={content} />}
      </div>
    </div>
  );
};

export default App;
