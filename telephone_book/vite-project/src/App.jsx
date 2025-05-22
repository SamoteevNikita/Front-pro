import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import ContactList from "./Components/ContactList/ContactList";
import AddContactForm from "./Components/AddContactForm/AddContactForm";

function App() {
  const [view, setView] = useState("contacts");
  const [contacts, setContacts] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) =>
        setContacts(
          data.map((user) => ({
            id: user.id,
            firstName: user.name.split(" ")[0],
            lastName: user.name.split(" ")[1] || "",
            phone: user.phone,
          }))
        )
      );
  }, []);


  const addContact = (contact) => {
    setContacts([...contacts, { id: Date.now(), ...contact }]);
  };


  const deleteContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div>
      <Header setView={setView} />
      {view === "contacts" ? (
        <ContactList contacts={contacts} onDelete={deleteContact} />
      ) : (
        <AddContactForm addContact={addContact} goBack={() => setView("contacts")} />
      )}
    </div>
  );
}

export default App;
