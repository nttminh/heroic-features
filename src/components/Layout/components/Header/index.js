import React, { useState } from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Navbar
            color="dark"
            expand="md"
            container
            dark
        >
            <NavbarBrand href="/">
                Start Bootstrap
            </NavbarBrand>
            <NavbarToggler onClick={() => { setIsOpen(prev => setIsOpen(!prev)) }} />
            <Collapse
                isOpen={isOpen}
                navbar>
                <Nav
                    className="ms-auto"
                    navbar
                >
                    <NavItem>
                        <NavLink active href="/">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header