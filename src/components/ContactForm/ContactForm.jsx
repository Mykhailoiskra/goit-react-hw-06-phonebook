// Libraries
import { useState } from "react";
import { useDispatch } from "react-redux";

// Components
import { addContact } from "../../redux/itemsSlice";

// Other staff
import s from "./ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.form__label}>
        Name
        <input
          className={s.form__input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        ></input>
      </label>
      <label className={s.form__label}>
        Number
        <input
          className={s.form__input}
          type="text"
          value={number}
          name="number"
          onChange={handleChange}
        ></input>
      </label>
      <button className={s.form__btn} type="submit">
        Add
      </button>
    </form>
  );
}
