import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import WordInput from './WordInput';

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
                            index={0}
                            key={0}
                            onWordChange={this.handleWordChange}
                        />
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
                    </Col>
                    <Col md={6}>
                        <WordInput 
                                index={6}
                                key={6}
                                onWordChange={this.handleWordChange}
                            />
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
                    </Col>
                </Row>
                {this.props.wordCount != 24 ? null :
                <Row>
                    <br />
                    <Col md={6}>
                        <WordInput 
                            index={12}
                            key={12}
                            onWordChange={this.handleWordChange}
                        />
                        <WordInput 
                            index={13}
                            key={13}
                            onWordChange={this.handleWordChange}
                        />
                        <WordInput 
                            index={14}
                            key={14}
                            onWordChange={this.handleWordChange}
                        />
                        <WordInput 
                            index={15}
                            key={15}
                            onWordChange={this.handleWordChange}
                        />
                        <WordInput 
                            index={16}
                            key={16}
                            onWordChange={this.handleWordChange}
                        />
                        <WordInput 
                            index={17}
                            key={17}
                            onWordChange={this.handleWordChange}
                        />
                    </Col>
                    <Col md={6}>
                        <WordInput 
                                index={18}
                                key={18}
                                onWordChange={this.handleWordChange}
                            />
                        <WordInput 
                            index={19}
                            key={19}
                            onWordChange={this.handleWordChange}
                        />
                        <WordInput 
                            index={20}
                            key={20}
                            onWordChange={this.handleWordChange}
                        />
                        <WordInput 
                            index={21}
                            key={21}
                            onWordChange={this.handleWordChange}
                        />
                        <WordInput 
                            index={22}
                            key={22}
                            onWordChange={this.handleWordChange}
                        />
                        <WordInput 
                            index={23}
                            key={23}
                            onWordChange={this.handleWordChange}
                        />
                    </Col>
                </Row>
                }
            </form>
        );
    }
} 

export default SeedsteelInputs;