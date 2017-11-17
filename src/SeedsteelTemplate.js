import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';
import SeedsteelInputs from './SeedsteelInputs';
// import SeedsteelSvg from './SeedsteelSvg';
// import SeedsteelSvg2 from './SeedsteelSvg2';
import NewSvg from './NewSvg';

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
                            <SeedsteelInputs
                                onValidWordlist={this.onValidWordlist}
                                />
                        </Col>
                        <Col md={1} />
                        <Col md={6} >
                            <NewSvg />
                            {/* <SeedsteelSvg 
                                validWords={this.state.validWords}
                                /> */}
                                {/* <svg>
                            <SeedsteelSvg2 
                                validWords={this.state.validWords}
                                />
                                </svg> */}
                        </Col>
                        <Col md={1} />
                    </Row>
                </Grid>
            </div>
        );
    }
} 

export default SeedsteelTemplate;