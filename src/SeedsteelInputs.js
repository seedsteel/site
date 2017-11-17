import React, { Component } from 'react';
import WordInput from './WordInput';
import { get12WordList } from './wordutils';

class SeedsteelInputs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            seedWords: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleWordChange = this.handleWordChange.bind(this);
    }
    
    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleWordChange(index, word) {
        this.props.onValidWordlist(["a", "b", "c"]);
    }

    render() {
        return (
            <div>
                 <form>
                    {get12WordList().map((i) => 
                        <WordInput 
                            index={i}
                            key={i}
                            onWordChange={this.handleWordChange}
                        />
                    )}
                </form>
            </div>
        );
    }
} 

export default SeedsteelInputs;