import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import SeedsteelInputs from './SeedsteelInputs';
import BraillePlatesSvg from './BraillePlatesSvg';
import ScoreboardPlatesSvg from './ScoreboardPlatesSvg';
import SaveButton from './SaveButton';
import SvgRenderControl from './SvgRenderControl';
import WordCountControl from './WordCountControl';

class SeedsteelTemplate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wordCount: 12,
            seedWords: ["", "", "", "", "", "", "", "", "", "", "", ""],
            renderType: "scoreboard"
        };

        this.updateWordlist = this.updateWordlist.bind(this);
        this.setRenderType = this.setRenderType.bind(this);
        this.setWordCount = this.setWordCount.bind(this);
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

    setWordCount(wordCount) {
        console.log("SETTING WORD COUNT: " + wordCount)
        this.setState({wordCount: wordCount})
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col md={1} />
                        <Col md={6} >
                            <Row>
                                <Col md={6} >
                                    <WordCountControl
                                        wordCount={this.state.wordCount}
                                        setWordCount={this.setWordCount}
                                        />
                                </Col>
                                <Col md={6} >
                                    <SvgRenderControl
                                        renderType={this.state.renderType}
                                        setRenderType={this.setRenderType}
                                        />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col md={12} >
                                    <SaveButton />
                                </Col>
                            </Row>
                            <br />
                            <br />
                            <SeedsteelInputs
                                updateWordlist={this.updateWordlist}
                                />
                        </Col>
                        <Col md={5} >
                            {this.getSvgForRenderType(this.state.renderType, this.state.seedWords)}}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
} 

export default SeedsteelTemplate;