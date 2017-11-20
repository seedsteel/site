import React, { Component } from 'react';
import SeedsteelScoreboard from './SeedsteelScoreboard';

class ScoreboardPlates24Svg extends Component {

    render() {
        return (
            <svg 
                id="theletters"
                height={"8.5in"} 
                width={"11in"}
                xmlns="http://www.w3.org/2000/svg"
                // transform="rotate(90) "
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
                <SeedsteelScoreboard
                    x={4.25}
                    y={0.25}
                    plateIndex={2}
                    seedWords={this.props.seedWords}
                    subkey={2}
                    />
                <SeedsteelScoreboard
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

export default ScoreboardPlates24Svg;