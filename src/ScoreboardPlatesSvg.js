import React, { Component } from 'react';
import SeedsteelScoreboard from './SeedsteelScoreboard';

class ScoreboardPlatesSvg extends Component {

    render() {
        return (
            <svg 
                id="theletters"
                height={"11in"} 
                width={"8.5in"}
                xmlns="http://www.w3.org/2000/svg"
                >
                <SeedsteelScoreboard
                    x={0.25}
                    y={0.25}
                    plateIndex={0}
                    seedWords={this.props.seedWords}
                    subkey={0}
                    />
                <SeedsteelScoreboard
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

export default ScoreboardPlatesSvg;