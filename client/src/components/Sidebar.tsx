import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { RootState } from "../store";
import FileSwitcher from "./FileSwitcher";
import { updateCurrentItem } from "../store/active-slice";

function Sidebar() {
  const data = useSelector((state: RootState) => state.data);
  const activeItem = useSelector(
    (state: RootState) => state.current.currentItem
  );
  const [currentItem, setCurrentItem] = useState(activeItem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCurrentItem(currentItem));
  }, [currentItem]);

  return (
    <div className="bg-custom-dark-300 w-[250px] h-full overflow-x-hidden overflow-y-auto p-5 ease-in-out duration-300">
      <span className="uppercase text-custom-grey-300 text-custom-text-heading-sm block tracking-[2px] mb-6">
        My Documents
      </span>
      <Button mode="primary" w="full">
        + New Document
      </Button>

      {data.map((item) => (
        <div className="mt-4" key={item.id}>
          <FileSwitcher
            onClick={() => setCurrentItem(item.id)}
            text={item.createdAt}
            title={item.title}
          />
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
