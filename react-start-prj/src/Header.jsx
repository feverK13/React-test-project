import './styles/Header.css'

function Header() {
    return (
        <header id="header">
            <nav>
                <a href="#header">Home</a>
                <a href="#content">About</a>
                <a href="#footer">Contacts</a>
            </nav>

            <div className='welcomeMsg'>
                <h1>HI, that's my first Vite + React page)</h1>
                <p>Wish to continue developing with that technologies</p>
            </div>
            
        </header>
    );
}

export default Header