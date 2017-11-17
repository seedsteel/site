import React, { Component } from 'react';
import SeedsteelWordRow, {wordRowHeight} from './SeedsteelWordRow';

const mmPerInch = 25.4;
const rectHeight = 6;
const rectWidth = 2;

const pageYOffset = 0.5
const firstWordRowHeightOffset = 0.75;

const cornerCircleEdgeDistance = 0.25;
const cornerCircleRadius = 0.125;

const outerEdgeStyle = {stroke: '#000000', fill: 'none', strokeWidth:1.21908905}
//fill:none;fill-opacity:0.31372549;stroke:#000000;stroke-width:0.25399998;stroke-miterlimit:4;stroke-dasharray:0.25399998, 0.76199994;stroke-dashoffset:0;stroke-opacity:1

class SeedsteelPlate extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const offsetX = this.props.x;
        const offsetY = this.props.y;

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
                    />
                <SeedsteelWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset + (wordRowHeight * 1)}
                    />
                <SeedsteelWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset + (wordRowHeight * 2)}
                    />
                <SeedsteelWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset + (wordRowHeight * 3)}
                    />
                <SeedsteelWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset + (wordRowHeight * 4)}
                    />
                <SeedsteelWordRow 
                    x={offsetX}
                    y={offsetY + firstWordRowHeightOffset + (wordRowHeight * 5)}
                    />
            </g>
        );
    }
}


export default SeedsteelPlate;