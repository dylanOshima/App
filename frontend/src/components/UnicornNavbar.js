import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

const UnicornNavbar = () => (
    <Navbar>
        <NavItem onClick={() => console.log('test click')}>About</NavItem>
        <NavItem href='components.html'>Connect</NavItem>
        <NavItem href='components.html'>Directory</NavItem>
        <NavItem href='components.html'>Help</NavItem>
    </Navbar>
);

export default UnicornNavbar;