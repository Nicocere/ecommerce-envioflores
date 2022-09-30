import NavBar from "../Nav/NavBar";
import NavBarTop from "../NavBarTop/NavBarTop";

const Header = () => {
    return (
        <header className='cabeza'>
            <NavBarTop/>
            <NavBar/>
        </header>
    );
};

export default Header;