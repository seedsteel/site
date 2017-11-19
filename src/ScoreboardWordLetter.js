import React, { Component } from 'react';
import {isHole} from './letterutils';

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

const scoreboardLetterHoles = {
    " ": [],
    "a":[[1,0], [2,0], [3,0],
         [0,1], [4,1],
         [0,2], [4,2],
         [0,3], [1,3], [2,3], [3,3], [4,3],
         [0,4], [4,4],
         [0,5], [4,5],
         [0,6], [4,6],
        ],
    "b": [[0,0], [1,0], [2,0], [3,0],
          [0,1], [4,1],
          [0,2], [4,2],
          [0,3], [1,3], [2,3], [3,3], [4,3],
          [0,4], [4,4],
          [0,5], [4,5],
          [0,6], [1,6], [2,6], [3,6]
        ],
    "c": [[1,0], [2,0], [3,0], [4,0],
          [0,1],
          [0,2],
          [0,3],
          [0,4],
          [0,5],
          [1,6], [2,6], [3,6], [4,6]
        ],
    "d": [[0,0], [1,0], [2,0], [3,0],
          [0,1], [4,1],
          [0,2], [4,2],
          [0,3], [4,3],
          [0,4], [4,4],
          [0,5], [4,5],
          [0,6], [1,6], [2,6], [3,6]
        ],
    "e": [[0,0], [1,0], [2,0], [3,0], [4,0],
          [0,1],
          [0,2],
          [0,3], [1,3], [2,3], [3,3],
          [0,4],
          [0,5],
          [0,6], [1,6], [2,6], [3,6], [4,6]
        ],
    "f": [[0,0], [1,0], [2,0], [3,0], [4,0],
          [0,1],
          [0,2],
          [0,3], [1,3], [2,3], [3,3],
          [0,4],
          [0,5],
          [0,6]
    ],
    "g": [[1,0], [2,0], [3,0], [4,0],
          [0,1],
          [0,2],
          [0,3], [2,3], [3,3], [41,3],
          [0,4], [4,4],
          [0,5], [4,5],
          [1,6], [2,6], [3,6]
    ],
    "h": [[0,0], [4,0],
          [0,1], [4,1],
          [0,2], [4,2],
          [0,3], [1,3], [2,3], [3,3], [4,3],
          [0,4], [4,4],
          [0,5], [4,5],
          [0,6], [4,6]
    ],
    "i": [[0,0], [1,0], [2,0], [3,0], [4,0],
          [2,1],
          [2,2],
          [2,3],
          [2,4],
          [2,5],
          [0,6], [1,6], [2,6], [3,6], [4,6]
    ],
    "j": [[2,0], [3,0], [4,0],
          [3,1],
          [3,2],
          [3,3],
          [0,4], [3,4],
          [0,5], [3,5],
          [1,6], [2,6]
    ],
    "k": [[0,0], [4,0],
          [0,1], [3,1],
          [0,2], [2,2],
          [0,3], [1,3],
          [0,4], [2,4],
          [0,5], [3,5],
          [0,6], [4,6]
    ],
    "l": [[0,0],
          [0,1],
          [0,2],
          [0,3],
          [0,4],
          [0,5],
          [0,6], [1,6], [2,6], [3,6], [4,6]
    ],
    "m": [[0,0], [4,0],
          [0,1], [1,1], [3,1], [4,1],
          [0,2], [2,2], [4,2],
          [0,3], [2,2], [4,3],
          [0,4], [4,4],
          [0,5], [4,5],
          [0,6], [4,6]
    ],
    "n": [[0,0], [4,0],
          [0,1], [1,1], [4,1],
          [0,2], [1,2], [4,2],
          [0,3], [2,3], [4,3],
          [0,4], [3,4], [4,4],
          [0,5], [3,5], [4,5],
          [0,6], [4,6]
    ],
    "o": [[1,0], [2,0], [3,0],
          [0,1], [4,1],
          [0,2], [4,2],
          [0,3], [4,3],
          [0,4], [4,4],
          [0,5], [4,5],
          [1,6], [2,6], [3,6]
    ],
    "p": [[0,0], [1,0], [2,0], [3,0],
          [0,1], [4,1],
          [0,2], [4,2],
          [0,3], [1,3], [2,3], [3,3],
          [0,4], 
          [0,5], 
          [0,6]
    ],
    "q": [[1,0], [2,0], [3,0],
          [0,1], [4,1],
          [0,2], [4,2],
          [0,3], [4,3],
          [0,4], [2,4], [4,4],
          [0,5], [3,5], [4,5],
          [1,6], [2,6], [3,6], [4,6]
    ],
    "r": [[0,0], [1,0], [2,0], [3,0],
          [0,1], [4,1],
          [0,2], [4,2],
          [0,3], [1,3], [2,3], [3,3],
          [0,4], [2,4], 
          [0,5], [3,5],
          [0,6], [4,6]
    ],
    "s": [[1,0], [2,0], [3,0], [4,0],
          [0,1],
          [0,2],
          [0,3], [1,3], [2,3], [3,3],
          [4,4],
          [4,5],
          [0,6], [1,6], [2,6], [3,6]
    ],
    "t": [[0,0], [1,0], [2,0], [3,0], [4,0],
          [2,1],
          [2,2],
          [2,3],
          [2,4],
          [2,5],
          [2,6]
    ],
    "u": [[0,0], [4,0],
          [0,1], [4,1],
          [0,2], [4,2],
          [0,3], [4,3],
          [0,4], [4,4],
          [0,5], [4,5],
          [1,6], [2,6], [3,6]
    ],
    "v": [[0,0], [4,0],
          [0,1], [4,1],
          [0,2], [4,2],
          [0,3], [4,3],
          [0,4], [1,4], [3,4], [4,4],
          [1,5], [3,5],
          [2,6]
    ],
    "w": [[0,0], [4,0],
          [0,1], [4,1],
          [0,2], [4,2],
          [0,3], [2,3], [4,3],
          [0,4], [1,4], [3,4], [4,4],
          [0,5], [1,5], [3,5], [4,5],
          [0,6], [4,6]
    ],
    "x": [[0,0], [4,0],
          [0,1], [4,1],
          [1,2], [3,2],
          [2,3],
          [1,4], [3,4],
          [0,5], [4,5],
          [0,6], [4,6]
    ],
    "y": [[0,0], [4,0],
          [0,1], [4,1],
          [1,2], [3,2],
          [2,3],
          [2,4],
          [2,5],
          [2,6]
    ],
    "z": [[0,0], [1,0], [2,0], [3,0], [4,0],
          [4,1],
          [3,2],
          [2,3],
          [1,4],
          [0,5],
          [0,6], [1,6], [2,6], [3,6], [4,6]
    ]
}

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

                {/* {[...Array(gridXLineCount - 1)].map((a, x) =>
                    [...Array(gridYLineCount - 1)].map((a, y) => {
                        getLetterGridCircle(letter, offsetX, offsetY, x, y);
                    })               
                )}                 */}

                {/* {getLetterGridCircle(letter, offsetX, offsetY, 0, 0)}
                {getLetterGridCircle(letter, offsetX, offsetY, 0, 1)}
                {getLetterGridCircle(letter, offsetX, offsetY, 0, 2)}
                {getLetterGridCircle(letter, offsetX, offsetY, 1, 0)}
                {getLetterGridCircle(letter, offsetX, offsetY, 1, 1)}
                {getLetterGridCircle(letter, offsetX, offsetY, 1, 2)} */}
            </g>
        );
    }
}


export default ScoreboardWordLetter;