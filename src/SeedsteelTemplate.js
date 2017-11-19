import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import SeedsteelInputs from './SeedsteelInputs';
import BraillePlatesSvg from './BraillePlatesSvg';
import ScoreboardPlatesSvg from './ScoreboardPlatesSvg';
import SaveButton from './SaveButton';
import SvgRenderControl from './SvgRenderControl';

class SeedsteelTemplate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seedWords: ["", "", "", "", "", "", "", "", "", "", "", ""],
            renderType: "scoreboard"
        };

        this.updateWordlist = this.updateWordlist.bind(this);
        this.setRenderType = this.setRenderType.bind(this);
    }
    
    updateWordlist(index, word) {
        let newSeedWords = this.state.seedWords;
        newSeedWords[index] = word;
        this.setState({seedWords: newSeedWords});
    }

    getSvgForRenderType(renderType, seedwords) {
        switch(this.state.renderType) {
            case "scoreboard":
                return <ScoreboardPlatesSvg 
                            seedWords={this.state.seedWords}
                            />
            case "braille":
                return <BraillePlatesSvg 
                            seedWords={this.state.seedWords}
                            />
        }
    }

    setRenderType(renderType) {
        this.setState({renderType: renderType})
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
                            <br />
                            <br />
                            <SvgRenderControl
                                renderType={this.state.renderType}
                                setRenderType={this.setRenderType}
                                />

                        </Col>
                        <Col md={1} >
                            <br />
                            <br />
                            <br />
                            <SaveButton />
                            {/* <SvgRenderControl
                                renderType={this.state.renderType}
                                setRenderType={this.setRenderType}
                                /> */}
                        </Col>
                        <Col md={5} >
                            {this.getSvgForRenderType(this.state.renderType, this.state.seedWords)}}
                            {/* <ScoreboardPlatesSvg 
                                seedWords={this.state.seedWords}
                                /> */}
                            {/* <BraillePlatesSvg 
                                seedWords={this.state.seedWords}
                                /> */}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
} 

export default SeedsteelTemplate;