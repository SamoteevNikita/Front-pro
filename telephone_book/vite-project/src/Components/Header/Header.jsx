function Header({ setView }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => setView("contacts") } >Контакты</button>
      <button onClick={() => setView("add")}>Добавить Контакт</button>
    </div>
  )
}

export default Header