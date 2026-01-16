import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useAuth } from '../../context/AuthContext'
import Button from '../ui/Button.jsx'
import styles from './Navbar.module.css'

function BurgerIcon({ isOpen, onClick }) {
  return (
    <div onClick={onClick} className={styles.burgerIcon}>
      {isOpen ? (
        <svg xmlns='http://www.w3.org/2000/svg' width={40} height={40} viewBox='0 0 24 24'>
          <path
            fill='#131313'
            d='M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z'
          ></path>
        </svg>
      ) : (
        <svg xmlns='http://www.w3.org/2000/svg' width={40} height={40} viewBox='0 0 24 24'>
          <path fill='#131313' d='M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z'></path>
        </svg>
      )}
    </div>
  )
}

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth()
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
  }

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  // const closeMenu = () => {
  //   setIsOpen(false)
  // }

  return (
    <nav className={styles.navBar}>
      <NavLink to='/' className={styles.navLogo}>
        Arete
      </NavLink>

      <BurgerIcon onClick={toggleMenu} isOpen={isOpen} />

      <ul className={isOpen ? styles.navListMenu : styles.navList}>
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
          <li>
            <Button onClick={logout} children='Вихід' variant='navItem' />
          </li>
        )}
      </ul>
    </nav>
  )
}
