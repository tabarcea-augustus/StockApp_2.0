import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default class MenuComponent extends Component {
    state = { activeItem: this.props.page };

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
    };

    render() {
        const { activeItem } = this.state;

        return (
            <div>
                <Menu pointing secondary color="orange">
                    {}

                    <Menu.Item
                        as={Link}
                        to="/stocks"
                        name="Stocks"
                        active={activeItem === "stocks"}
                        onClick={this.handleItemClick}
                    >
                        Stocks
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}
