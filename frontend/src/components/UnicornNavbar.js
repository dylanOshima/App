import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

const UnicornNavbar = () => (
    <Navbar>
        <NavItem href='/about'>About</NavItem>
        <NavItem href='/connect'>Connect</NavItem>
        <NavItem href='/directory'>Directory</NavItem>
        <NavItem href='/help'>Help</NavItem>
        <NavItem className='right' href='/login'>Login</NavItem>
    </Navbar>
);

export default UnicornNavbar;