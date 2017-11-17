import React, { Component } from 'react';
import {isHole} from './letterutils';

const holeRadius = 0.05;
const gridXLetterEdgeOffset = 0.15;
const gridXSpacing = 0.2;
const gridYSpacing = 0.2;

const outerEdgeStyle = {stroke: '#000000', fill: 'none', strokeWidth:1.21908905}
const filledCircleStyle = {stroke: '#000000', fill: 'black', strokeWidth:1.21908905}

const getLetterCircleXCenter = (offsetX, gridXIndex) => {
    return offsetX + gridXLetterEdgeOffset + (gridXIndex * gridXSpacing);
}

const getLetterCircleYCenter = (offsetY, gridYIndex) => {
    return offsetY + (gridYIndex * gridYSpacing) + holeRadius;
}


const getLetterGridCircle = (letter, offsetX, offsetY, gridX, gridY) => {
    const xCenter = getLetterCircleXCenter(offsetX, gridX);
    const yCenter = getLetterCircleYCenter(offsetY, gridY);
    const showHole = isHole(letter, gridX, gridY);

    const circleStyle = showHole ? filledCircleStyle : outerEdgeStyle;

    return (
        <circle 
            cx={xCenter + "in"} 
            cy={yCenter + "in"}
            r={holeRadius + "in"} 
            style={circleStyle}
            />
    );
}

class SeedsteelWordLetter extends Component {

    render() {
        const offsetX = this.props.x;
        const offsetY = this.props.y;
        const letter = this.props.letter;

        return (
            <g>
                {getLetterGridCircle(letter, offsetX, offsetY, 0, 0)}
                {getLetterGridCircle(letter, offsetX, offsetY, 0, 1)}
                {getLetterGridCircle(letter, offsetX, offsetY, 0, 2)}
                {getLetterGridCircle(letter, offsetX, offsetY, 1, 0)}
                {getLetterGridCircle(letter, offsetX, offsetY, 1, 1)}
                {getLetterGridCircle(letter, offsetX, offsetY, 1, 2)}
            </g>
        );
    }
}


export default SeedsteelWordLetter;