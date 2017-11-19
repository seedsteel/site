import React, { Component } from 'react';
import { Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';


class SvgRenderControl extends Component {
    
    constructor(props) {
        super(props);

        this.showBraille = this.showBraille.bind(this);
        this.showScoreboard = this.showScoreboard.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    showBraille(e) {
        this.props.setRenderType("braille");
    }

    showScoreboard(e) {
        this.props.setRenderType("scoreboard");
    }

    onChange(renderType) {
        this.props.setRenderType(renderType);
    }

    render() {
        return (
            <ButtonToolbar>
                <ToggleButtonGroup 
                    type="radio"
                    name="encoding"
                    value={this.props.renderType}
                    onChange={this.onChange}
                    >
                    <ToggleButton value="scoreboard">
                        Use Letter Template
                    </ToggleButton>
                    <ToggleButton value="braille">
                        Use Braille Template
                    </ToggleButton>
                </ToggleButtonGroup>
            </ButtonToolbar>

            // <div>
            //     <Button 
            //         bsStyle="info" 
            //         onClick={this.showBraille}
            //         >Braille</Button>
            //     <Button 
            //         bsStyle="info" 
            //         onClick={this.showScoreboard}
            //         >Letters</Button>
            // </div>
        )
    }
}

export default SvgRenderControl;