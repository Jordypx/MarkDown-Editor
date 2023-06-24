
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/theme-slice";
import { RootState } from "../store";
const Switch = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state:RootState) => state.theme.darkMode)

  return (
    <div>
      <input
        type="checkbox"
        id="darkModeSwtich"
        className="peer hidden"
        onChange={() => dispatch(toggleTheme())}
        checked={theme ? false : true}
      />
      <label
        htmlFor="darkModeSwtich"
        className='bg-custom-grey-400 cursor-pointer relative h-6 w-12 rounded-full block before:content-["_"] before:block before:w-3 before:h-3 before:bg-custom-white-100 before:rounded-full before:absolute before:top-[calc(50%-(0.75rem/2))] before:left-2 before:right-2 before:ease-in-out before:duration-300 peer-checked:before:left-auto peer-checked:before:right-2 peer-checked:before:ease-in-out peer-checked:before:duration-300'
      ></label>
    </div>
  );
};

export default Switch;
