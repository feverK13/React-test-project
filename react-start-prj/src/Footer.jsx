import './styles/Footer.css'

function Footer() {
    const pilpup = './assets/pilpupPic.jpg';

    function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <footer id="footer">
            <div className='msgBlock'>
                <img src={pilpup} alt="" />
                <h2>Wow, that page already dived here</h2>
                <p>© I must mention that all copyrights are saved by mighty Pilpup</p>
            </div>
            <form>
                <input type="email" placeholder='Your email'/>
                <button type='submit'>Subscribe</button>
                <input type="text" placeholder='Your message'/>
                <button type='button' onClick={scrollToTop}>To Top</button>
            </form>
        </footer>
    );
}

export default Footer