import './styles/Footer.css'
import pilpup from './assets/pilpupPic.jpg'

export default function Footer() {

    function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
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
                <button type='button' onClick={scrollToTop}>To Top</button>
            </form>
        </footer>
    );
}