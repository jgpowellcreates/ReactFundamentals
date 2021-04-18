import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    return(
        <header>
            <Navbar className="header">
                <NavbarBrand href="/">React library</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://github.com/jgpowellcreates/reactApp">
                            GitHub
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    );
};
export default Header;