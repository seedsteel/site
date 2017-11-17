import React, { Component } from 'react';
import SeedsteelPlate from './SeedsteelPlate';
import {saveAs} from 'file-saver';

// import {seedsteel_letters} from './seedsteel_letters';
import { Button } from 'react-bootstrap';


class NewSvg extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seedWords: 'seed words'
        };
    }

    componentWillReceiveProps({validWords}) {
        this.setState({seedWords: validWords});
    }

    saveit() {
        var svgContents = document.getElementById('theletters').outerHTML;
        var filename = "test-save";
        var xmlPrefix = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>";
        var blob = new Blob([xmlPrefix + svgContents], {type: "image/svg+xml"});
        saveAs(blob, filename + ".svg");
    }

    render() {
        return (
            <div>
            <Button 
                bsStyle="info" 
                onClick={this.saveit}
                >Save</Button>

            <svg 
                id="theletters"
                height={"11in"} 
                width={"8.5in"}
                // viewBox="0 0 215.9 279.4"
                xmlns="http://www.w3.org/2000/svg"
                >
                <circle cx={"0in"} cy={"0in"} r={"0.1in"} fill="red" />
                <SeedsteelPlate
                    x={0.5}
                    y={0.5}
                    seedWords={this.state.seedWords}
                    />
                <SeedsteelPlate 
                    x={2.5}
                    y={0.5}
                    seedWords={this.state.seedWords}
                    />
            </svg>
            </div>
        );
    }
}

export default NewSvg;