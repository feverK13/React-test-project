import '../styles/Footer.css'
import pilpup from '../assets/images/pilpupPic.jpg'
import { useEffect, useRef, useState } from 'react'

export default function Footer() {
    const [visible, setVisible] = useState(false)
    const lastY = useRef(0)

    useEffect(() => {
    function onScroll() {
        const y = window.scrollY || window.pageYOffset
        const headerEl = document.getElementById('header')
        const headerH = headerEl ? headerEl.offsetHeight : 0

        if (y < headerH) {
        setVisible(false)
        } else {
        if (y > lastY.current) setVisible(true)
        else if (y < lastY.current) setVisible(false)
        }
        lastY.current = y
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
    }, [])

    function scrollToTop() {
        window.scrollTo({top: 0});
    }

    return (
        <footer id="footer">
            <div className='msgBlock'>
                <img src={pilpup} alt="Pokemon Pilpup picture" />
                <div className='msgText'>
                    <h2>Wow, You already dived here</h2>
                    <p>© I must mention that all copyrights are saved by Mighty Pilpup!!!</p>
                </div>
            </div>
            <form>
                <input type="email" placeholder='Your email'/>
                <textarea placeholder='Your message'/>
                <button type='submit'>Subscribe</button>
            </form>
            <button className={`toTopBtn ${visible ? 'visible' : ''}`} type='button' onClick={scrollToTop}>To Top</button>
        </footer>
    );
}