import { Outlet } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import styles from '../../styles/Layout.module.css'

export default function Layout(){

    return(
        <div className={styles.layoutWrapper}>
            <Navbar />  
            <main className={styles.mainContent}>
                <Outlet />
            </main> 
            <Footer />
        </div>
    )
}