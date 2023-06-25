import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import FileDetail from "./FileDetail";
import { RootState } from "../store";
import { deleteItem, updateItem } from "../store/data-slice";
import { updateCurrentItem } from "../store/active-slice";
import Dialog from "./Dialog";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editorContent: string;
}

const Header = (props: HeaderProps) => {
  const data = useSelector((state: RootState) => state.data);
  const activeItem = useSelector(
    (state: RootState) => state.current.currentItem
  );
  const currentData = data.filter((item) => item.id === activeItem);
  const dispatch = useDispatch();
  const [filename, setFileName] = useState(currentData[0].title);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    setFileName(currentData[0].title);
  }, [activeItem]);

  // Save current item.
  const saveHandler = () => {
    // Calculate the update date
    const today = new Date();
    const updatedDate = [
      today.getMonth().toString().padStart(2, "0"),
      today.getDate().toString().padStart(2, "0"),
      today.getFullYear(),
    ].join("-");

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
    dispatch(deleteItem(activeItem));
    // Get first item from the array.
    const newCurrentItemId = data[0].id;
    // Set last item as the current active item.
    dispatch(updateCurrentItem(newCurrentItemId));
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
        <a href="/">
          <img src="/src/assets/logo.svg" alt="Markdown" />
        </a>
        <span className="w-px h-10 bg-custom-grey-400 block mx-6"></span>
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

      {showDialog && <Dialog dispatchAction={deleteHandler} setShowDialog={setShowDialog} />}
    </div>
  );
};

export default Header;
