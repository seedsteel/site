import React, { Component } from 'react';
import {saveAs} from 'file-saver';
import { Button } from 'react-bootstrap';


class SaveButton extends Component {
    
    saveit() {
        var svgContents = document.getElementById('theletters').outerHTML;
        var filename = "test-save";
        var xmlPrefix = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>";
        var blob = new Blob([xmlPrefix + svgContents], {type: "image/svg+xml"});
        saveAs(blob, filename + ".svg");
    }

    render() {
        return (
            <Button 
                bsStyle="success" 
                onClick={this.saveit}
                block
                >
                Save Template
                </Button>
        )
    }
}

export default SaveButton;