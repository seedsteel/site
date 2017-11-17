import React, { Component } from 'react';
import SeedsteelWordLetter from './SeedsteelWordLetter';

export const wordRowHeight = 0.75;
const wordRowWidth = 2;

const outerEdgeStyle = {stroke: '#000000', fill: 'none', strokeWidth:0.21908905}

const letterXOffset = 0.5;


class SeedsteelWordRow extends Component {

    render() {
        const offsetX = this.props.x;
        const offsetY = this.props.y;

        const letter1 = this.props.word[0];
        const letter2 = this.props.word[1];
        const letter3 = this.props.word[2];
        const letter4 = this.props.word[3];

        return (
            <g>
                <rect
                    height={wordRowHeight + "in"} 
                    width={wordRowWidth + "in"}
                    style={outerEdgeStyle}
                    x={offsetX + "in"}
                    y={offsetY + "in"}
                    />
                
                <SeedsteelWordLetter
                    x={offsetX}
                    y={offsetY}
                    letter={letter1}
                    />
                <SeedsteelWordLetter
                    x={offsetX + letterXOffset}
                    y={offsetY}
                    letter={letter2}
                    />
                <SeedsteelWordLetter
                    x={offsetX + (letterXOffset * 2)}
                    y={offsetY}
                    letter={letter3}
                    />
                <SeedsteelWordLetter
                    x={offsetX + (letterXOffset * 3)}
                    y={offsetY}
                    letter={letter4}
                    />
            </g>
        );
    }
}


export default SeedsteelWordRow;