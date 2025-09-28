import './styles/Header.css'

function Header() {
    return (
        <header>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contacts</a>
            </nav>

            <div className='welcomeMsg'>
                <h1>HI, that's my first Vite + React page)</h1>
                <p>Wish to continue developing with that technologies</p>
            </div>
            
        </header>
    );
}

export default Header