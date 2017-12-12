import React, { Component } from 'react';
import ScoreboardWordRow, {wordRowHeight} from './ScoreboardWordRow';
import ScoreboardLetterPair from './ScoreboardLetterPair';
import SeedsteelPlate from './SeedsteelPlate';

const rectHeight = 6;
const rectWidth = 2;

const firstWordRowHeightOffset = 0.75;

const cornerCircleEdgeDistance = 0.25;
const cornerCircleRadius = 0.125;

const outerEdgeStyle = {stroke: '#000000', fill: 'none', strokeWidth:1.21908905}

class SeedsteelScoreboard extends Component {

    render() {
        const offsetX = this.props.x;
        const offsetY = this.props.y;
        const keyPrefix = this.props.subkey;
        const plateIndex = this.props.plateIndex;

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

        const plateIdFieldOffsetX = 0;
        const plateIdFieldOffsetY = 0;
        const idFieldChar1 = "0";
        const idFieldChar2 = (plateIndex + 1).toString();

        return (
            <g>
                <SeedsteelPlate 
                    x={offsetX}
                    y={offsetY}
                    subkey={keyPrefix}
                    />
                <ScoreboardWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset}
                    word={word1}
                    subkey={keyPrefix + ":1"}
                    />
                <ScoreboardWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset + (wordRowHeight * 1)}
                    word={word2}
                    subkey={keyPrefix + ":2"}
                    />
                <ScoreboardWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset + (wordRowHeight * 2)}
                    word={word3}
                    subkey={keyPrefix + ":3"}
                    />
                <ScoreboardWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset + (wordRowHeight * 3)}
                    word={word4}
                    subkey={keyPrefix + ":4"}
                    />
                <ScoreboardWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset + (wordRowHeight * 4)}
                    word={word5}
                    subkey={keyPrefix + ":5"}
                    />
                <ScoreboardWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset + (wordRowHeight * 5)}
                    word={word6}
                    subkey={keyPrefix + ":6"}
                    />
                <ScoreboardLetterPair
                    x={offsetX + 0.5}
                    y={offsetY}
                    char1={" "}
                    char2={" "}
                    subkey={keyPrefix + ":up"}
                    />
                <ScoreboardLetterPair
                    x={offsetX + 0.5}
                    y={offsetY + firstWordRowHeightOffset + (wordRowHeight * 6)}
                    char1={idFieldChar1}
                    char2={idFieldChar2}
                    subkey={keyPrefix + ":bp"}
                    />
            </g>
        );
    }
}


export default SeedsteelScoreboard;