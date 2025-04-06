import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={() => onDelete(contact.id)}
        />
      ))}
    </ul>
  );
}

export default ContactList;
