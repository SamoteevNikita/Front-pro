import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function AddContactForm({ addContact }) { 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !phone) return;

    addContact({ firstName, lastName, phone });

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Додати контакт</h2>
      <div>
        <label>Ім'я: </label>
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div>
        <label>Прізвище: </label>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div>
        <label>Телефон: </label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <button type="submit">Зберегти</button>
      <button type="button" onClick={() => navigate("/")}>Скасувати</button>
    </form>
  );
}

export default AddContactForm;