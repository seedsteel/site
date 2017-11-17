import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import AutofillOptions from './AutofillOptions';
import { getBip0039Words } from './wordutils';

class WordInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            word: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.wordSelected = this.wordSelected.bind(this);
    }

    isWordValid(inputWord) {
        const wordlist = getBip0039Words();
        return (wordlist.indexOf(inputWord) > -1);
    }
    
    getValidationState() {
        const inputWord = this.state.word;
        if (this.isWordValid(inputWord)) {
            return 'success';
        }
        return 'error';
    }

    handleChange(e) {
        this.setState({ word: e.target.value });
        const isValid = this.isWordValid(e.target.value);
        this.props.onWordChange(this.props.index, e.target.value, isValid);
    }

    wordSelected(word) {
        const isValid = this.isWordValid(word);
        this.props.onWordChange(this.props.index, word, isValid);
        this.setState({word: word});
    }

    render() {
        return (
            <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
                >
                <ControlLabel>Word {this.props.index}</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.word}
                    placeholder="Enter text"
                    onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <AutofillOptions
                    prefix={this.state.word}
                    wordSelected={this.wordSelected}
                />
            </FormGroup>
        );
    }
}

export default WordInput;