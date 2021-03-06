import React, { Component } from 'react';
import SeedsteelBraille from './SeedsteelBraille';

class BraillePlatesSvg extends Component {

    render() {
        return (
            <svg 
                id="theletters"
                height={"11in"} 
                width={"8.5in"}
                xmlns="http://www.w3.org/2000/svg"
                >
                <SeedsteelBraille
                    x={0.25}
                    y={0.25}
                    plateIndex={0}
                    seedWords={this.props.seedWords}
                    subkey={0}
                    />
                <SeedsteelBraille
                    x={2.25}
                    y={0.25}
                    plateIndex={1}
                    seedWords={this.props.seedWords}
                    subkey={1}
                    />
            </svg>
        );
    }
}

export default BraillePlatesSvg;