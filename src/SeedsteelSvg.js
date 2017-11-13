import React, { Component } from 'react';

class SeedsteelSvg extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seedWords: 'seed words'
        };
    }

    componentWillReceiveProps({validWords}) {
        this.setState({seedWords: validWords});
    }

    render() {
        return (
            <div>
                SVG Out - {this.state.seedWords}
            </div>
        );
    }
}

export default SeedsteelSvg;