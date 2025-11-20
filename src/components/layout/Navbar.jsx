import { NavLink } from 'react-router-dom'

import { useAuth } from '../../context/AuthContext'
import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth()
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
  }

  return (
    <nav className={styles.navBar}>
      <NavLink to='/' className={styles.navLogo}>
        Arete
      </NavLink>

      <ul className={styles.navList}>
        {isLoggedIn && (
          <>
            <li className={styles.listItem}>
              <NavLink to='/' className={getNavLinkClass}>
                Головна
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink to='/shop' className={getNavLinkClass}>
                Магазин
              </NavLink>
            </li>
          </>
        )}

        <li className={styles.listItem}>
          <NavLink to='/about-us' className={getNavLinkClass}>
            Про Нас
          </NavLink>
        </li>

        {!isLoggedIn && (
          <li className={styles.listItem}>
            <NavLink to='/auth' className={`${getNavLinkClass} ${styles.loginLink}`}>
              Увійти
            </NavLink>
          </li>
        )}

        {isLoggedIn && (
          <li className={`${styles.listItem} ${styles.exitBut}`}>
            <button onClick={logout} className='logoutBut'>
              Вихід
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}
