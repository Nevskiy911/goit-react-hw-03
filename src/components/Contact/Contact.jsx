import s from "./Contact.module.css";

function Contact({ contact, onDelete }) {
  return (
    <li className={s.item}>
      <div className={s.contacts}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button className={s.delete} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
