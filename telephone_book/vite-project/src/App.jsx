import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import ContactList from "./Components/ContactList/ContactList";
import AddContactForm from "./Components/AddContactForm/AddContactForm";

function App() {

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
      <Routes>
        <Route path="/" element={<ContactList contacts={contacts} onDelete={deleteContact} />} />
        <Route path="/add" element={<AddContactForm addContact={addContact} />} />
      </Routes>
    </div>
  );
}

export default App;

/// привоетщврпщывшпщылордылворп
