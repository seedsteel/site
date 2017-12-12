import React, { Component } from 'react';
import SeedsteelNavbar from './SeedsteelNavbar';
import SeedsteelTemplate from './SeedsteelTemplate';

class SeedsteelApp extends Component {
    render() {
        return (
            <div>
                <SeedsteelNavbar />
                <SeedsteelTemplate />
            </div>
        );
        }
} 

export default SeedsteelApp;