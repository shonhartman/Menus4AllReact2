import React from "react";

class StorePicker extends React.Component {
    render() {
        const loggedIn = false;
        return (
            <div className="wrapper">
                {loggedIn ?
                    <form className="store-selector">
                            <h2>Please Enter a Store</h2>
                            <input type="text" required placeholder="Store Name"/>
                            <button type="submit">Visit Store</button>
                    </form>
                    :
                    <h1>Not Logged In</h1>
                }
            </div>
        )
    }
}

export default StorePicker;