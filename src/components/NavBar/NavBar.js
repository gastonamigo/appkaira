import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="NavBar" >
      <NavLink to='/'>
          <h3>Ecommerce</h3>
      </NavLink>

        <div className="Categories">
            <NavLink to={'/category/FDM'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Impresoras FDM</NavLink>
            <NavLink to={'/category/resina'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Impresoras de Resina</NavLink>
            <NavLink to={'/category/notebook'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Notebook</NavLink>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar
