import React, { Component } from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import SeedsteelTemplate from './SeedsteelTemplate';

class SeedsteelNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header> 
                    <Navbar.Brand>
                        <a href="#">Seedsteel Template Generator</a>
                    </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
            </div>
        );
        }
} 

export default SeedsteelNavbar;