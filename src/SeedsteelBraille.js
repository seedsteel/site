import React, { Component } from 'react';
import BrailleWordRow, {wordRowHeight} from './BrailleWordRow';
import SeedsteelPlate from './SeedsteelPlate';

const firstWordRowHeightOffset = 0.75;

const cornerCircleEdgeDistance = 0.25;
const cornerCircleRadius = 0.125;

const outerEdgeStyle = {stroke: '#000000', fill: 'none', strokeWidth:1.21908905}

class SeedsteelBraille extends Component {

    render() {
        const offsetX = this.props.x;
        const offsetY = this.props.y;
        const keyPrefix = this.props.subkey;

        const word1Index = (this.props.plateIndex * 6) + 0;
        const word2Index = (this.props.plateIndex * 6) + 1;
        const word3Index = (this.props.plateIndex * 6) + 2;
        const word4Index = (this.props.plateIndex * 6) + 3;
        const word5Index = (this.props.plateIndex * 6) + 4;
        const word6Index = (this.props.plateIndex * 6) + 5;

        const word1 = this.props.seedWords[word1Index];
        const word2 = this.props.seedWords[word2Index];
        const word3 = this.props.seedWords[word3Index];
        const word4 = this.props.seedWords[word4Index];
        const word5 = this.props.seedWords[word5Index];
        const word6 = this.props.seedWords[word6Index];

        return (
            <g>
                <SeedsteelPlate 
                    x={offsetX}
                    y={offsetY}
                    />
                <BrailleWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset}
                    word={word1}
                    subKey={keyPrefix + ":" + 1}
                    />
                <BrailleWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset + (wordRowHeight * 1)}
                    word={word2}
                    subKey={keyPrefix + ":" + 2}
                    />
                <BrailleWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset + (wordRowHeight * 2)}
                    word={word3}
                    subKey={keyPrefix + ":" + 3}
                    />
                <BrailleWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset + (wordRowHeight * 3)}
                    word={word4}
                    subKey={keyPrefix + ":" + 4}
                    />
                <BrailleWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset + (wordRowHeight * 4)}
                    word={word5}
                    subKey={keyPrefix + ":" + 5}
                    />
                <BrailleWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset + (wordRowHeight * 5)}
                    word={word6}
                    subKey={keyPrefix + ":" + 6}
                    />
            </g>
        );
    }
}


export default SeedsteelBraille;