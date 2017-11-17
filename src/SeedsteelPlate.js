import React, { Component } from 'react';
import SeedsteelWordRow, {wordRowHeight} from './SeedsteelWordRow';

const rectHeight = 6;
const rectWidth = 2;

const firstWordRowHeightOffset = 0.75;

const cornerCircleEdgeDistance = 0.25;
const cornerCircleRadius = 0.125;

const outerEdgeStyle = {stroke: '#000000', fill: 'none', strokeWidth:1.21908905}

class SeedsteelPlate extends Component {

    render() {
        const offsetX = this.props.x;
        const offsetY = this.props.y;

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
            <g 
            // transform="scale(0.25)"
                >
                <rect
                    height={rectHeight + "in"} 
                    width={rectWidth + "in"}
                    style={outerEdgeStyle}
                    rx={0.25 + "in"}
                    ry={0.25 + "in"}
                    x={offsetX + "in"}
                    y={offsetY + "in"}
                    />
                <circle 
                    cx={offsetX + cornerCircleEdgeDistance + "in"} 
                    cy={offsetY + cornerCircleEdgeDistance + "in"}
                    r={cornerCircleRadius + "in"} 
                    style={outerEdgeStyle}
                    />
                <circle 
                    cx={offsetX + cornerCircleEdgeDistance + "in"} 
                    cy={offsetY + rectHeight - cornerCircleEdgeDistance + "in"}
                    r={cornerCircleRadius + "in"} 
                    style={outerEdgeStyle}
                    />
                <circle 
                    cx={offsetX + rectWidth - cornerCircleEdgeDistance + "in"} 
                    cy={offsetY + cornerCircleEdgeDistance + "in"}
                    r={cornerCircleRadius + "in"} 
                    style={outerEdgeStyle}
                    />
                <circle 
                    cx={offsetX + rectWidth - cornerCircleEdgeDistance + "in"} 
                    cy={offsetY + rectHeight - cornerCircleEdgeDistance + "in"}
                    r={cornerCircleRadius + "in"} 
                    style={outerEdgeStyle}
                    />
                <line 
                    x1={offsetX + 0.5 + "in"}
                    y1={offsetY + "in"}
                    x2={offsetX + 0.75 + "in"}
                    y2={offsetY + 0.25 + "in"}
                    style={outerEdgeStyle}
                    />
                <line 
                    x1={offsetX + 0.75 + "in"}
                    y1={offsetY + "in"}
                    x2={offsetX + 0.75 + "in"}
                    y2={offsetY + 0.25 + "in"}
                    style={outerEdgeStyle}
                    />
                <line 
                    x1={offsetX + "in"}
                    y1={offsetY + 0.5 + "in"}
                    x2={offsetX + 0.25 + "in"}
                    y2={offsetY + 0.5 + "in"}
                    style={outerEdgeStyle}
                    />
                <line 
                    x1={offsetX + "in"}
                    y1={offsetY + 0.75 + "in"}
                    x2={offsetX + 0.25 + "in"}
                    y2={offsetY + 0.5 + "in"}
                    style={outerEdgeStyle}
                    />
                <line 
                    x1={offsetX + "in"}
                    y1={offsetY + 5.25 + "in"}
                    x2={offsetX + 0.25 + "in"}
                    y2={offsetY + 5.25 + "in"}
                    style={outerEdgeStyle}
                    />
                <line 
                    x1={offsetX + "in"}
                    y1={offsetY + 5.5 + "in"}
                    x2={offsetX + 0.25 + "in"}
                    y2={offsetY + 5.25 + "in"}
                    style={outerEdgeStyle}
                    />
                <SeedsteelWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset}
                    word={word1}
                    />
                <SeedsteelWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset + (wordRowHeight * 1)}
                    word={word2}
                    />
                <SeedsteelWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset + (wordRowHeight * 2)}
                    word={word3}
                    />
                <SeedsteelWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset + (wordRowHeight * 3)}
                    word={word4}
                    />
                <SeedsteelWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset + (wordRowHeight * 4)}
                    word={word5}
                    />
                <SeedsteelWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset + (wordRowHeight * 5)}
                    word={word6}
                    />
            </g>
        );
    }
}


export default SeedsteelPlate;