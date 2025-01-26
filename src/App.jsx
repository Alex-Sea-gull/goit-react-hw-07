import { useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();

  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>

      {isLoading && (
        <p style={{ color: "blue", fontSize: "18px", fontWeight: "bold" }}>
          Loading...
        </p>
      )}
      {isError && (
        <p style={{ color: "red", fontSize: "18px", fontWeight: "bold" }}>
          Error
        </p>
      )}

      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
