import { useSelector, useDispatch } from "react-redux";

import Contact from "../Contact/Contact.jsx";
import { deleteContact } from "../../redux/itemsSlice";

import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul className={s.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
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
