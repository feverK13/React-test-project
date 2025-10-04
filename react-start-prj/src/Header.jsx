import './styles/Header.css'

function Header() {
    return (
        <header id="header">
            <nav>
                <a href="#header">H-O-M-E</a>
                <a href="#content">A-B-O-U-T</a>
                <a href="#footer">F-O-R-M</a>
            </nav>

            <div className='welcomeMsg'>
                <h1>HI, that's my first Vite + React page)</h1>
                <p>Wish to continue developing with that technologies</p>
            </div>
            
        </header>
    );
}

export default Header