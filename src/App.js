import ContactList from "components/ContactList/ContactList.jsx";
import ContactForm from "components/ContactForm/ContactForm.jsx";
import Filter from "components/Filter/Filter.jsx";

import "./App.css";

export default function App() {
  return (
    <div className="main_container">
      <h1 className="main_heading">Phonebook</h1>
      <ContactForm />

      <h2 className="contacts_heading">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
