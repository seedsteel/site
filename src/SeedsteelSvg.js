import React, { Component } from 'react';
import SeedsteelPlate from './SeedsteelPlate';


class SeedsteelSvg extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seedWords: 'seed words'
        };
    }

    componentWillReceiveProps({validWords}) {
        this.setState({seedWords: validWords});
    }

    render() {
        "fill:none;fill-opacity:0.31372549;stroke:#000000;stroke-width:0.21908905;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1";
        return (
            <svg height={"11in"} width={"8.5in"}>
                <circle cx={"0in"} cy={"0in"} r={"0.1in"} fill="red" />
                <SeedsteelPlate x={0.5} y={0.5}/>
                <SeedsteelPlate x={2.5} y={0.5}/>
            </svg>
        );
    }
}

export default SeedsteelSvg;