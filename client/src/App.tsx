import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Editor from "./components/Editor";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dialog from "./components/Dialog";
import { RootState } from "./store";
import { ContentType } from "./store/data-slice";
const App = () => {
  const [content, setContent] = useState(Array<ContentType>);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [editorContent, setEditiorContent] = useState("");
  const data = useSelector((state: RootState) => state.data);
  const theme = useSelector((state: RootState) => state.theme.darkMode);

  const activeItem = useSelector(
    (state: RootState) => state.current.currentItem
  );
  useEffect(() => {
    setContent(data.filter((item) => item.id === activeItem));
  }, [activeItem]);

  // // console.log(content);
  // useEffect(() => {
  //   setContent(data.filter((item) => item.id === activeItem));
  // }, [activeItem]);

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
      className={`grid  ${
        isSidebarOpen ? "grid-cols-[250px_auto]" : "grid-cols-[0_100%]"
      } ${theme ? "dark" : ""} overflow-hidden ease-in-out duration-300`}
    >
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className={`relative w-100`}>
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          editorContent={editorContent}
        />
        {content[0] && (
          <Editor
            value={content[0].content}
            setEditiorContent={setEditiorContent}
          />
        )}
      </div>

      <Dialog />
    </div>
  );
};

export default App;
