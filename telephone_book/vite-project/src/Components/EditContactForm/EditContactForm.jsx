import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


function EditContactForm ({ contacts, updateContact}) {
    const { id } = useParams()
    const contact = contacts.find(c => c.id === Number(id))

    const [ firstName, setFirstName] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ phone, setPhone ] = useState("") 

    useEffect(() => {
        if (contact) {
            setFirstName(contact.firstName);
            setLastName(contact.lastName);
            setPhone(contact.phone);
        }
    }, [contact]);

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        updateContact({id: contact.id, firstName, lastName, phone})
        navigate("/")
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Релактировать контакт</h2>
            <input value={firstName} placeholder="Имя" onChange={(e) => setFirstName(e.target.value)}/>
            <input value={lastName} placeholder="Фамилия" onChange={(e) => setLastName(e.target.value)} />
            <input value={phone} placeholder="Телефон" onChange={(e) => setPhone(e.target.value)} />
            <button type="submit">Сохранить</button>
            <button type="button" onClick={() => navigate("/")}>Сбросить</button>
        </form>
    )
}

export default EditContactForm;