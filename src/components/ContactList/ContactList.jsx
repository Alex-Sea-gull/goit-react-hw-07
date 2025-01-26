import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { filterContacts } from "../../redux/filtersSlice";
import { deleteContact } from "../../redux/contactsOps";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(filterContacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={s.wrapperListItem}>
      <ul className={s.contactListItem}>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              deleteContact={handleDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
