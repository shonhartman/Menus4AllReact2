import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="top">
                    <h1>Header</h1>
                    <h3 className="tagline">
                        <span>Tag Line</span>
                    </h3>
                </header>
            </div>
        )
    }
}

export default Header;