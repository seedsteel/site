import React, { Component } from 'react';
import ScoreboardWordLetter from './ScoreboardWordLetter';

export const wordRowHeight = 0.75;
const wordRowWidth = 1;

const outerEdgeStyle = {stroke: '#000000', fill: 'none', strokeWidth:0.21908905}

const letterXOffset = 0.5;


class ScoreboardLetterPair extends Component {

    render() {
        const offsetX = this.props.x;
        const offsetY = this.props.y;
        const keyPrefix = this.props.subkey;

        const char1 = this.props.char1;
        const char2 = this.props.char2;
        console.log("C1 " + char1)

        return (
            <g>
                <rect
                    height={wordRowHeight + "in"} 
                    width={wordRowWidth + "in"}
                    style={outerEdgeStyle}
                    x={offsetX + "in"}
                    y={offsetY + "in"}
                    />
                
                <ScoreboardWordLetter
                    x={offsetX}
                    y={offsetY}
                    letter={char1}
                    subkey={keyPrefix + ":1"}
                    />
                <ScoreboardWordLetter
                    x={offsetX + letterXOffset}
                    y={offsetY}
                    letter={char2}
                    subkey={keyPrefix + ":2"}
                    />
            </g>
        );
    }
}


export default ScoreboardLetterPair;