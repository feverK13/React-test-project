import { Outlet } from 'react-router-dom'

import styles from '../../styles/Layout.module.css'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className={styles.layoutWrapper}>
      <Navbar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
