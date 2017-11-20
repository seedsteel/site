import React, { Component } from 'react';
import SeedsteelBraille from './SeedsteelBraille';

class BraillePlates24Svg extends Component {

    render() {
        return (
            <svg 
                id="theletters"
                height={"8.5in"} 
                width={"11in"}
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
                <SeedsteelBraille
                    x={4.25}
                    y={0.25}
                    plateIndex={2}
                    seedWords={this.props.seedWords}
                    subkey={2}
                    />
                <SeedsteelBraille
                    x={6.25}
                    y={0.25}
                    plateIndex={3}
                    seedWords={this.props.seedWords}
                    subkey={3}
                    />
            </svg>
        );
    }
}

export default BraillePlates24Svg;