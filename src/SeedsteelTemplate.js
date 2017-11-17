import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import SeedsteelInputs from './SeedsteelInputs';
import BraillePlateSvg from './BraillePlateSvg';

class SeedsteelTemplate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // seedWords: ["alph", "brav", "char", "delt", "echo", "foxt",
            //             "golf", "hote", "indi", "juli", "kilo", "lima"]
            seedWords: ["", "", "", "", "", "", "", "", "", "", "", ""]
};

        this.updateWordlist = this.updateWordlist.bind(this);
    }
    
    updateWordlist(index, word) {
        let newSeedWords = this.state.seedWords;
        newSeedWords[index] = word;
        this.setState({seedWords: newSeedWords});
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col md={1} />
                        <Col md={5} >
                            <SeedsteelInputs
                                updateWordlist={this.updateWordlist}
                                />
                        </Col>
                        <Col md={1} />
                        <Col md={5} >
                            <BraillePlateSvg 
                                seedWords={this.state.seedWords}
                                />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
} 

export default SeedsteelTemplate;