import React, { Component } from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import SeedsteelTemplate from './SeedsteelTemplate';

class SeedsteelApp extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Seedsteel</a>
                    </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">Create 12 Word Plates</NavItem>
                        <NavItem eventKey={1} href="#">Create 24 Word Plates</NavItem>
                    </Nav>
                </Navbar>
                <SeedsteelTemplate />
            </div>
        );
        }
} 

export default SeedsteelApp;