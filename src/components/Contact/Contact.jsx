import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import s from "./Contact.module.css";

const Contact = ({ name, number, id, deleteContact }) => {
  return (
    <div className={s.wrapperContactItem}>
      <ul className={s.contactItem}>
        <div className={s.userItem}>
          <div className={s.userNameWrapper}>
            <FaUser className={s.icon} />
            <span>{name}</span>,
          </div>
          <div className={s.userPhoneWrapper}>
            <BsFillTelephoneFill className={s.icon} />
            <span>{number}</span>
          </div>
        </div>
        <button
          className={s.contactButton}
          type="button"
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </ul>
    </div>
  );
};

export default Contact;
