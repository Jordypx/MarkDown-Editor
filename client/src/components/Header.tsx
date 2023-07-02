import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../store";
import { addItem, deleteItem, updateItem } from "../store/data-slice";
import { updateCurrentItem } from "../store/active-slice";
import { getCreateDate } from "../helpers/utility";
import Button from "./Button";
import FileDetail from "./FileDetail";
import Dialog from "./Dialog";
interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editorContent: string;
}

const Header = (props: HeaderProps) => {
  const data = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();

  const [deleted, setDeleted] = useState(false);

  if (deleted) {
    dispatch(updateCurrentItem(data[data.length - 1].id));
    setDeleted(!deleted);
  }



  const activeItem = useSelector(
    (state: RootState) => state.current.currentItem
  );
  const activeData = data.filter((item) => item.id === activeItem);

  const [filename, setFileName] = useState(activeData[0].title);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    setFileName(activeData[0].title);
  }, [activeItem]);

  // Save current item.
  const saveHandler = () => {
    // Get the update date
    const updatedDate = getCreateDate();
    // Data to update
    const updatedData = {
      id: activeItem,
      title: filename,
      content: props.editorContent,
      createdAt: updatedDate,
    };
    dispatch(updateItem(updatedData));
  };

  // Delete current item.
  const deleteHandler = () => {
    if (data.length !== 1) {
      // Get first item from the array.
      dispatch(deleteItem(activeItem));
    } else {
      // Generate unique ID
      const newPostId = uuidv4();
      const postDate = getCreateDate();
      // Dispatch add action (Add new document)
      dispatch(
        addItem({
          id: newPostId,
          createdAt: postDate,
          title: "new_document.md",
          content: "",
        })
      );
      dispatch(deleteItem(activeItem));
      dispatch(updateCurrentItem(newPostId));
    }
    setDeleted(true);
  };

  return (
    <div className="w-screen h-[72px] bg-red-100 bg-custom-dark-200 flex items-center justify-between pr-4">
      <div className="flex h-full items-center">
        <button
          onClick={() => props.setIsSidebarOpen(!props.isSidebarOpen)}
          className="w-[72px] h-full flex justify-center items-center bg-custom-dark-100 mr-6"
        >
          {!props.isSidebarOpen ? (
            <img src="src/assets/icon-menu.svg" />
          ) : (
            <img src="src/assets/icon-close.svg" />
          )}
        </button>
        <a href="/" className="lg:hidden">
          <img src="/src/assets/logo.svg" alt="Markdown" />
        </a>
        <span className="w-px h-10 bg-custom-grey-400 block mx-6 lg:hidden"></span>
        <FileDetail
          text="Document Name"
          title={filename}
          onChange={setFileName}
        />
      </div>

      <div className="flex items-center">
        <Button
          onClick={() => setShowDialog(!showDialog)}
          mode="transparent"
          icon="delete"
          className="mr-6"
        />
        <Button onClick={() => saveHandler()} mode="primary" icon="save">
          Save Changes
        </Button>
      </div>

      {showDialog && (
        <Dialog dispatchAction={deleteHandler} setShowDialog={setShowDialog} />
      )}
    </div>
  );
};

export default Header;
