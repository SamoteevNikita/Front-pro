import { useState } from "react";

// Принимаем пропсы с теми именами, которые ты передаёшь в App.jsx
function AddContactForm({ addContact, goBack }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !phone) return;

    // Используем addContact, как передано из App.jsx
    addContact({ firstName, lastName, phone });

    // Возврат к списку контактів
    goBack();
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
      <button type="button" onClick={goBack}>Скасувати</button>
    </form>
  );
}

export default AddContactForm;
