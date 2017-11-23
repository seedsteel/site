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
                        <a href="#">Seedsteel Template Generator</a>
                    </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <SeedsteelTemplate />
            </div>
        );
        }
} 

export default SeedsteelApp;