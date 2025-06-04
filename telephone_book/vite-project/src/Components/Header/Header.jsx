import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
      <Link to="/">
        <button>Контакты</button>
      </Link>
      <Link to="/add">
        <button>Добавить Контакт</button>
      </Link>
    </div>
  )
}

export default Header