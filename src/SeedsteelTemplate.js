import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';
import SeedsteelInputs from './SeedsteelInputs';
import SeedsteelSvg from './SeedsteelSvg';

class SeedsteelTemplate extends Component {

    // constructor() {
    //     super();
    //     this.state = {value: ''};
    // }

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        this.onValidWordlist = this.onValidWordlist.bind(this);
    }
    
    onValidWordlist(validWords) {
        this.setState({validWords: validWords});
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col md={1} />
                        <Col md={3} >
                            <SeedsteelInputs onValidWordlist={this.onValidWordlist}
                                             />
                        </Col>
                        <Col md={1} />
                        <Col md={6} >
                            <SeedsteelSvg validWords={this.state.validWords}
                                          />
                        </Col>
                        <Col md={1} />
                    </Row>
                </Grid>
            </div>
        );
    }
} 

export default SeedsteelTemplate;