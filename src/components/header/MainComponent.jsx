import React, { Component } from "react";
import { Redirect } from "react-router-dom";


export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logout: false
        };
    }

    render() {
        return (
            <div className="header__component">
                <div className="header__component-logo">
                    <i className="react loading inverted white icon" />
                    Stock<span>Quotes - Insights at your click</span>
                </div>
            </div>
        );
    }
}
