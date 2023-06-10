import { useSelector } from "react-redux";
import { RootState } from "./../store";
const FileDetaiil = () => {
  const title = useSelector((state: RootState) => state.data.title);

  return (
    <div className="flex items-center">
      <img src="/src/assets/icon-document.svg" alt="File name" />
      <div className="ml-5">
        <span className="text-custom-grey-300 font-extralight text-custom-text-body leading-none">
          Document Name
        </span>
        <span className="text-custom-white-100 custom-text-heading-md block">
          {title}
        </span>
      </div>
    </div>
  );
};

export default FileDetaiil;
