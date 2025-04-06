import s from "./Contact.module.css";
import { FaPhone, FaUser } from "react-icons/fa";

function Contact({ contact, onDelete }) {
  return (
    <li className={s.item}>
      <div className={s.contacts}>
        <p>
          <FaUser style={{ marginRight: "8px" }} />
          {contact.name}
        </p>
        <p>
          <FaPhone style={{ marginRight: "8px", transform: "scaleX(-1)" }} />
          {contact.number}
        </p>
      </div>
      <button className={s.delete} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
