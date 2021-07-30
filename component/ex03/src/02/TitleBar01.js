import React, {Component} from 'react';

export default class TitelBar01 extends Component {

    onClickHeader(e) {
        console.log("TitelBar01 click");
        } 

    render() {
        return (
            <h1 onClick={this.onClickHeader}
                style={ {
                    cursor:"pointer"
                } }>
                ex03 - Functional Handler(Class Component) 
            </h1>
        )
    }
}