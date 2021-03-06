import React, { Component } from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';


class SvgRenderControl extends Component {
    
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
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
                        Letter Template
                    </ToggleButton>
                    <ToggleButton value="braille">
                        Braille Template
                    </ToggleButton>
                </ToggleButtonGroup>
            </ButtonToolbar>
        )
    }
}

export default SvgRenderControl;