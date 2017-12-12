import React, { Component } from 'react';
import {isHole} from './letterutils';
import {scoreboardLetterHoles} from './letterset_scoreboard';

const holeRadius = 0.01;
const gridXLetterEdgeOffset = 0.04;
const gridYLetterEdgeOffset = 0.1;
const gridXSpacing = 0.08;
const gridYSpacing = 0.08;
const gridXLineCount = 6;
const gridYLineCount = 8;

const outerEdgeStyle = {stroke: '#000000', fill: 'none', strokeWidth:1.21908905}
const filledCircleStyle = {stroke: '#000000', fill: 'black', strokeWidth:1.21908905}
const gridLineStyle = {stroke: '#000000', fill: 'black', strokeWidth:0.21908905}

const getLetterCircleXCenter = (offsetX, gridXIndex) => {
    return offsetX + gridXLetterEdgeOffset + (gridXIndex * gridXSpacing) + (gridXSpacing / 2);
}

const getLetterCircleYCenter = (offsetY, gridYIndex) => {
    return offsetY + gridYLetterEdgeOffset + (gridYIndex * gridYSpacing) + (gridYSpacing / 2);
}

const getGridCircle = (offsetX, offsetY, gridX, gridY, keyPrefix) => {
    const xCenter = getLetterCircleXCenter(offsetX, gridX);
    const yCenter = getLetterCircleYCenter(offsetY, gridY);

    return (
        <circle 
            cx={xCenter + "in"} 
            cy={yCenter + "in"}
            r={holeRadius + "in"} 
            style={filledCircleStyle}
            key={keyPrefix + ":" + gridX + ":" + gridY}
            />
    );
}

class ScoreboardWordLetter extends Component {

    render() {
        const offsetX = this.props.x;
        const offsetY = this.props.y;
        const keyPrefix = this.props.subkey;

        let letter = this.props.letter;
        if (letter === undefined) {
            letter = " ";
        }
        const letterGrid = scoreboardLetterHoles[letter];

        return (
            <g>
                {[...Array(gridXLineCount)].map((x, i) =>
                    <line 
                        x1={offsetX + 0.04 + (i * gridXSpacing) + "in"}
                        y1={offsetY + 0.1 + "in"}
                        x2={offsetX + 0.04 + (i * gridXSpacing) + "in"}
                        y2={offsetY + 0.65 + "in"}
                        style={gridLineStyle}
                        key={"x" + i}
                        />
                )}                
                {[...Array(gridYLineCount)].map((x, i) =>
                    <line 
                        x1={offsetX + 0.04 + "in"}
                        y1={offsetY + 0.1 + (i * gridYSpacing) + "in"}
                        x2={offsetX + 0.04 + ((gridXLineCount - 1) * gridXSpacing) + "in"}
                        y2={offsetY + 0.1 + (i * gridYSpacing) + "in"}
                        style={gridLineStyle}
                        key={"y" + i}
                        />
                )}    

                {
                    letterGrid.map(a => {
                        const gridX = a[0];
                        const gridY = a[1];

                        return getGridCircle(offsetX, offsetY, gridX, gridY, keyPrefix);
                    })
                }            
            </g>
        );
    }
}


export default ScoreboardWordLetter;