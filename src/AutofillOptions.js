import React, { Component } from 'react';
import { getBip0039Words } from './wordutils';
import { Button, ButtonToolbar } from 'react-bootstrap';


class AutofillOptions extends Component {

    constructor(props) {
        super(props);

        this.wordSelected = this.wordSelected.bind(this);
    }

    getPrefixMatchingWords = (prefix) => {
        let plc = prefix.toLowerCase();
        let matchingWords = getBip0039Words().filter(word => word.startsWith(plc));
        return matchingWords;
    }

    showNothing = () => '';

    showOptions = (prefix) => {
        let prefixMatchingWords = this.getPrefixMatchingWords(prefix);
        if (prefixMatchingWords.length === 1 && prefix.toLowerCase() === prefixMatchingWords[0]) {
            return '';
        }

        return (
            <ButtonToolbar>
                {prefixMatchingWords.map(f => 
                    <Button 
                        bsStyle="info" 
                        onClick={this.wordSelected}
                        key={f}
                        >
                        {f}
                    </Button>
                )}
            </ButtonToolbar>
        );
    };

    wordSelected = (e) => {
        let selectedWord = e.target.textContent;
        this.props.wordSelected(selectedWord);
    }

    render() {
        return (
            <div>
                {this.props.prefix.length <= 2 ? this.showNothing() : this.showOptions(this.props.prefix)}
            </div>
        )
    }
}


export default AutofillOptions;