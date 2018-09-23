import React from "react";

class MenuDisplay extends React.Component {
    render() {
        return (
            <li className="menu-fish">
                <p>{this.props.menu.address}</p>
                <p>{this.props.menu.caption}</p>
            </li>
        )
    }
}

export default MenuDisplay;