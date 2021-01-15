import { useSelector, useDispatch } from "react-redux";

import Contact from "../Contact/Contact.jsx";
import { deleteContact } from "../../redux/itemsSlice";
import { getFilteredContacts } from "../../redux/selectors";

import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactList__item}>
          <Contact
            name={name}
            number={number}
            onDelete={() => {
              dispatch(deleteContact(id));
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
