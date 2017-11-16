import React, { Component } from 'react';
import SeedsteelWordLetter from './SeedsteelWordLetter';

export const wordRowHeight = 0.75;
const wordRowWidth = 2;

const outerEdgeStyle = {stroke: '#000000', fill: 'none', strokeWidth:0.21908905}
//fill:none;fill-opacity:0.31372549;stroke:#000000;stroke-width:0.25399998;stroke-miterlimit:4;stroke-dasharray:0.25399998, 0.76199994;stroke-dashoffset:0;stroke-opacity:1

const letterXOffset = 0.5;
const wordIndexYOffset = 1.5;


class SeedsteelWordRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const offsetX = this.props.x;
        const offsetY = this.props.y;

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
                    />
                <SeedsteelWordLetter
                    x={offsetX + letterXOffset}
                    y={offsetY}
                    />
                <SeedsteelWordLetter
                    x={offsetX + (letterXOffset * 2)}
                    y={offsetY}
                    />
                <SeedsteelWordLetter
                    x={offsetX + (letterXOffset * 3)}
                    y={offsetY}
                    />
            </g>
        );
    }
}


export default SeedsteelWordRow;