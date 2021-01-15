import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";
import { getFilter } from "../../redux/selectors";

import s from "./Filter.module.css";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.filter}>
      Find a contact
      <input
        type="text"
        value={value}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
        className={s.filter__input}
      ></input>
    </label>
  );
};

export default Filter;
