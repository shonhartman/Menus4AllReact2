import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="top">
                    <h1>Menus for All</h1>
                    <h3 className="tagline">
                        <span>{this.props.restaurant.name}</span>
                    </h3>
                    <p>{this.props.restaurant.caption}</p>
                </header>
            </div>
        )
    }
}

export default Header;