import React, { Component } from 'react';

const holeRadius = 0.05;
const gridXLetterEdgeOffset = 0.15;
const gridXSpacing = 0.2;
const gridYSpacing = 0.2;

const outerEdgeStyle = {stroke: '#000000', fill: 'none', strokeWidth:1.21908905}

const getLetterCircleXCenter = (offsetX, gridXIndex) => {
    return offsetX + gridXLetterEdgeOffset + (gridXIndex * gridXSpacing);
}

const getLetterCircleYCenter = (offsetY, gridYIndex) => {
    return offsetY + (gridYIndex * gridYSpacing) + holeRadius;
}


const getLetterGridCircle = (offsetX, offsetY, gridX, gridY) => {
    const xCenter = getLetterCircleXCenter(offsetX, gridX);
    const yCenter = getLetterCircleYCenter(offsetY, gridY);

    return (
        <circle 
            cx={xCenter + "in"} 
            cy={yCenter + "in"}
            r={holeRadius + "in"} 
            style={outerEdgeStyle}
            />
    );
}

class SeedsteelWordLetter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const offsetX = this.props.x;
        const offsetY = this.props.y;

        return (
            <g>
                {getLetterGridCircle(offsetX, offsetY, 0, 0)}
                {getLetterGridCircle(offsetX, offsetY, 0, 1)}
                {getLetterGridCircle(offsetX, offsetY, 0, 2)}
                {getLetterGridCircle(offsetX, offsetY, 1, 0)}
                {getLetterGridCircle(offsetX, offsetY, 1, 1)}
                {getLetterGridCircle(offsetX, offsetY, 1, 2)}
            </g>
        );
    }
}


export default SeedsteelWordLetter;