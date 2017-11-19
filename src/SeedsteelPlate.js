import React, { Component } from 'react';

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

        return (
            <g>
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
            </g>
        );
    }
}


export default SeedsteelPlate;