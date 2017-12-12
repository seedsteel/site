import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import SeedsteelInputs from './SeedsteelInputs';
import BraillePlatesSvg from './BraillePlatesSvg';
import BraillePlates24Svg from './BraillePlates24Svg';
import ScoreboardPlatesSvg from './ScoreboardPlatesSvg';
import ScoreboardPlates24Svg from './ScoreboardPlates24Svg';
import SaveButton from './SaveButton';
import SvgRenderControl from './SvgRenderControl';
import WordCountControl from './WordCountControl';

class SeedsteelTemplate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wordCount: 12,
            seedWords: ["", "", "", "", "", "", "", "", "", "", "", "",
                        "", "", "", "", "", "", "", "", "", "", "", ""],
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

    getSvgTemplate() {
        switch(this.state.renderType) {
            case "scoreboard":
                if (this.state.wordCount === 24) {
                    return <ScoreboardPlates24Svg
                                seedWords={this.state.seedWords}
                                />
                }
                return <ScoreboardPlatesSvg
                            seedWords={this.state.seedWords}
                            />
            case "braille":
                if (this.state.wordCount === 24) {
                    return <BraillePlates24Svg
                                seedWords={this.state.seedWords}
                                />
                }
                return <BraillePlatesSvg
                            seedWords={this.state.seedWords}
                            />
        }
    }

    setRenderType(renderType) {
        this.setState({renderType: renderType})
    }

    setWordCount(wordCount) {
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
                                wordCount={this.state.wordCount}
                                />
                        </Col>
                        <Col md={5} >
                            {this.getSvgTemplate()}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
} 

export default SeedsteelTemplate;