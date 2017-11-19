import React, { Component } from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';


class WordCountControl extends Component {
    
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(wordCount) {
        this.props.setWordCount(wordCount);
    }

    render() {
        return (
            <ButtonToolbar>
                <ToggleButtonGroup 
                    type="radio"
                    name="wordCount"
                    value={this.props.wordCount}
                    onChange={this.onChange}
                    >
                    <ToggleButton value={12}>
                        12 Seed Words
                    </ToggleButton>
                    <ToggleButton value={24}>
                        24 Seed Words
                    </ToggleButton>
                </ToggleButtonGroup>
            </ButtonToolbar>
        )
    }
}

export default WordCountControl;