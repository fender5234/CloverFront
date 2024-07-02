import logo from './assets/images/logo.svg'
import './App.css'

function App() {
  return (
    <>
      <div className='sidebar'>
        <a className="sidebar-logo-link" href="#">
          <img className="sidebar-logo-image" src={logo} alt="Логотип CloverChat" />
        </a>
        <ul className='nav-list'>
          <li><a className="nav-link" href="#">Агенты</a></li>
          <li><a className="nav-link" href="#">Инструкции</a></li>
          <li><a className="nav-link" href="#">Техподдержка</a></li>
        </ul>
      </div>
      <header className='header'>
        <h1>ХЭДЭр!</h1>
      </header>
    </>
  )
}

export default App
