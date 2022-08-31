import logo from '../logo.svg';
const NavBar = () => {
    return (
        <div className = "navbarContainer">
            <div className='navBarItems'>
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className='titulo'>Mi Tienda</h1>
                <a class="item" href="#home">Home</a>
                <a class="item" href="#news">News</a>
                <a class="item" href="#contact">Contact</a>
                <a class="item" href="#about">About</a>
            </div>
        </div> 
    )
}

export default NavBar;