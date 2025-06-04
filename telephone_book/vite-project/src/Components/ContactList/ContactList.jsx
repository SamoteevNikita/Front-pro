import { Form, Link } from "react-router-dom";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
function ContactList({ contacts, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete(selectedId);
    setShowModal(false);
    setSelectedId(null);
  };

  const handleCancelDelete = () => {
    setShowModal(false)
    setSelectedId(null)
  }


  return (
    <div>
      <h2>Список контактів</h2>
      <table>
        <thead>
          <tr>
            <th>Ім’я</th>
            <th>Прізвище</th>
            <th>Телефон</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.phone}</td>
              <td>
                <Link to={`/edit/${contact.id}`}>
                  <button>Редагувати</button>
                </Link>
                <button onClick={() => handleDeleteClick(contact.id)}>Видалити</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={showModal} onHide={handleCancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Підтвердження</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ви впевнені, що хочете видалити цей контакт?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Скасувати
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Видалити
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  );
}

export default ContactList;
