import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  // console.log("SearchBox rendered");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value.trim();
    dispatch(changeFilter(value));
    // console.log("Filter value:", event.target.value);
  };

  return (
    <div className={s.wrapperSearchBox}>
      <form className={s.formSearchBox}>
        <label className={s.labelSearchBox}>Find contacts by name</label>
        <input
          className={s.inputSearchBox}
          type="text"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchBox;
