import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import WordInput from './WordInput';
import { get12WordList } from './wordutils';

class SeedsteelInputs extends Component {

    constructor(props) {
        super(props);
        
        this.handleWordChange = this.handleWordChange.bind(this);
    }
    
    handleWordChange(index, word, isValid) {
        if (isValid) {
            this.props.updateWordlist(index, word);
        } else {
            this.props.updateWordlist(index, "");
        }
    }

    render() {
        return (
            <form>
                <Row>
                    <Col md={6}>
                        <WordInput 
                            index={1}
                            key={1}
                            onWordChange={this.handleWordChange}
                        />
                        <WordInput 
                            index={2}
                            key={2}
                            onWordChange={this.handleWordChange}
                        />
                        <WordInput 
                            index={3}
                            key={3}
                            onWordChange={this.handleWordChange}
                        />
                        <WordInput 
                            index={4}
                            key={4}
                            onWordChange={this.handleWordChange}
                        />
                        <WordInput 
                            index={5}
                            key={5}
                            onWordChange={this.handleWordChange}
                        />
                        <WordInput 
                            index={6}
                            key={6}
                            onWordChange={this.handleWordChange}
                        />
                    </Col>
                    <Col md={6}>
                        <WordInput 
                            index={7}
                            key={7}
                            onWordChange={this.handleWordChange}
                        />
                        <WordInput 
                            index={8}
                            key={8}
                            onWordChange={this.handleWordChange}
                        />
                        <WordInput 
                            index={9}
                            key={9}
                            onWordChange={this.handleWordChange}
                        />
                        <WordInput 
                            index={10}
                            key={10}
                            onWordChange={this.handleWordChange}
                        />
                        <WordInput 
                            index={11}
                            key={11}
                            onWordChange={this.handleWordChange}
                        />
                        <WordInput 
                            index={12}
                            key={12}
                            onWordChange={this.handleWordChange}
                        />
                    </Col>
                </Row>

                {/* {get12WordList().map((i) => 
                    <WordInput 
                        index={i}
                        key={i}
                        onWordChange={this.handleWordChange}
                    />
                )} */}
            </form>
        );
    }
} 

export default SeedsteelInputs;