import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";

function App() {
  // Ініціалізація стану контактів
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  // const [contacts, setContacts] = useState([
  //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // ]);

  // стан фильтра
  const [filterContact, setFilterContact] = useState("");

  // додавання нового контакту
  const addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    setContacts((prev) => [...prev, newContact]);
  };

  //функція для зміни фільтра, яка змінюється при отриманні значення,нечутлива до регістру
  const handleFilterContact = (event) => {
    setFilterContact(event.target.value.toLowerCase());
  };

  //фільтрація масиву
  const searchResults = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterContact)
  );

  // видалення контакту
  const deleteContact = (id) => {
    console.log("ID delete contact", id);
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  // Оновлення локального сховища
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filterContact={filterContact} onChange={handleFilterContact} />
      <ContactList contacts={searchResults} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
