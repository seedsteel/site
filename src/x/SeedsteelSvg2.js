import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeedsteelPlate from './SeedsteelPlate';
import {saveAs} from 'file-saver';

// import {seedsteel_letters} from './seedsteel_letters';
import { Button } from 'react-bootstrap';


class SeedsteelSvg2 extends Component {

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

        // let p = ReactHtmlParser(seedshield_letters);
        // return p;

        // const marker = "replaceme";
        // let replaceit_index = seedsteel_letters.indexOf(marker);
        // let seedsteel_letters_front = seedsteel_letters.substring(0, replaceit_index);
        // let seedsteel_letters_end = seedsteel_letters.substring(replaceit_index + marker.length, seedsteel_letters.length - 1);

        // let j = (<SeedsteelPlate x={0.5} y={0.5}/>);
        // let middle = (<SeedsteelPlate x={0.5} y={0.5}/>);

        // let t = seedsteel_letters_front + middle + seedsteel_letters_end;

        let j = (<SeedsteelPlate x={0.5} y={0.5}/>);

        return j;

        // let domNode = document.getElementById("replaceme");

        // return ReactDOM.createPortal(
        //     <SeedsteelPlate x={0.5} y={0.5}/>,
        //     domNode,
        //   );
    }
}

export default SeedsteelSvg2;