import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import SeedsteelInputs from './SeedsteelInputs';
import BraillePlateSvg from './BraillePlateSvg';

class SeedsteelTemplate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seedWords: ["alph", "brav", "char", "delt", "echo", "foxt",
                        "golf", "hote", "indi", "juli", "kilo", "lima"]
        };

        this.onValidWordlist = this.onValidWordlist.bind(this);
    }
    
    onValidWordlist(validWords) {
        // this.setState({validWords: validWords});
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
                            <BraillePlateSvg 
                                seedWords={this.state.seedWords}
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