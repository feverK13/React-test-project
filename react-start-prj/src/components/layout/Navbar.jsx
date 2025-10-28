import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'


export default function Navbar() {
  const {isLoggedIn, logout} = useAuth()
  const getNavLinkClass = ({isActive}) => {
    return isActive ? 'navLink active' : 'navLink'
  }

  return (
    <nav className='navBar'>
        <NavLink to='/' className='navLogo'>
          Arete
        </NavLink>

        <ul className='navList'>
          {isLoggedIn && (
            <>
              <li className='listItem'>
                <NavLink to='/' className={getNavLinkClass}>Головна</NavLink>
              </li>
              <li className='listItem'>
                <NavLink to='/shop' className={getNavLinkClass}>Магазин</NavLink>
              </li>
            </>
          )}

          <li className='listItem'>
            <NavLink to='/about-us' className={getNavLinkClass}>Про Нас</NavLink>
          </li>

          {!isLoggedIn && (
            <li className='listItem loginLink'>
              <NavLink to='/auth' className={getNavLinkClass}>Увійти</NavLink>
            </li>
          )}

          {isLoggedIn && (
            <li className='listItem exitLink'>
              <button onClick={logout} className='logoutBut'>Вихід</button>
            </li>
          )}
        </ul>
    </nav>
  )
}