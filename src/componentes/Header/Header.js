import NavBar from "../Nav/NavBar";
import NavBarTop from "../NavBarTop/NavBarTop";
import NavBarBottom from '../NavBarBottom/NavBarBottom'

const Header = () => {
    return (
        <header className='cabeza'>
            <NavBarTop/>
            <NavBar/>
            <NavBarBottom/>
        </header>
    );
};

export default Header;