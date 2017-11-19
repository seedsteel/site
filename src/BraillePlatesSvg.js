import React, { Component } from 'react';
import SeedsteelBraille from './SeedsteelBraille';

class BraillePlatesSvg extends Component {

    render() {
        return (
            <svg 
                id="theletters"
                height={"11in"} 
                width={"8.5in"}
                // viewBox="0 0 215.9 279.4"
                xmlns="http://www.w3.org/2000/svg"
                >
                <circle cx={"0in"} cy={"0in"} r={"0.1in"} fill="red" />
                <SeedsteelBraille
                    x={0.5}
                    y={0.25}
                    plateIndex={0}
                    seedWords={this.props.seedWords}
                    subkey={0}
                    />
                <SeedsteelBraille
                    x={2.5}
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