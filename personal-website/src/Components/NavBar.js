import './NavBar.css';
const NavBar = () => (
    <header>
        <img className='logo' src='https://w0.peakpx.com/wallpaper/715/729/HD-wallpaper-air-jordan-black-logo-logos-merry-merry-chrismas-puma-red-sport.jpg' alt='logo'></img>
        <nav>
            <ul className='nav__links'>
               <li><a href='#'>About me</a></li>
               <li><a href='#'>Home</a></li>
               <li><a href='#'>PortFolio</a></li>
            </ul>   
        </nav>   
        <a className="cta" href='/'><button>Contact</button></a>   
    </header>
);

export default NavBar;