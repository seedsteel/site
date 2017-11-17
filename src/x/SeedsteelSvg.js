import React, { Component } from 'react';
import SeedsteelPlate from './SeedsteelPlate';
import {saveAs} from 'file-saver';

// import {seedsteel_letters} from './seedsteel_letters';
import { Button } from 'react-bootstrap';


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

    saveit() {
        var svgContents = document.getElementById('theletters').innerHTML;
        var filename = "test-save";
        var blob = new Blob([svgContents], {type: "image/svg+xml"});
        saveAs(blob, filename + ".svg");
    }

    render() {

        // let p = ReactHtmlParser(seedsteel_letters);
        // return p;

        // const marker = "replaceme";
        // let replaceit_index = seedsteel_letters.indexOf(marker);
        // let seedsteel_letters_front = seedsteel_letters.substring(0, replaceit_index);
        // let seedsteel_letters_end = seedsteel_letters.substring(replaceit_index + marker.length, seedsteel_letters.length - 1);

        // let j = (<SeedsteelPlate x={0.5} y={0.5}/>);
        // let middle = (<SeedsteelPlate x={0.5} y={0.5}/>);

        // let t = seedsteel_letters_front + middle + seedsteel_letters_end;

        return (
            <div>
                <Button 
                    bsStyle="info" 
                    onClick={this.saveit}
                    >
                    Save
                </Button>

            <div id="theletters" dangerouslySetInnerHTML={{ __html: seedsteel_letters }} />
            </div>
          );
        // return "fill:none;fill-opacity:0.31372549;stroke:#000000;stroke-width:0.21908905;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1";
        return {seedsteel_letters};
        return (
            <svg height={"11in"} width={"8.5in"}>
                <circle cx={"0in"} cy={"0in"} r={"0.1in"} fill="red" />
                <SeedsteelPlate x={0.5} y={0.5}/>
                <SeedsteelPlate x={2.5} y={0.5}/>
            </svg>
        );
    }
}

// $("#btn-save").click( function() {
//     var text = $("#textarea").val();
//     var filename = $("#input-fileName").val()
//     var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
//     saveAs(blob, filename+".txt");
//   });

export default SeedsteelSvg;