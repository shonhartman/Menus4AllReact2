import React from "react";
import { playerShuffle } from "../helpers";

class StorePicker extends React.Component {
    adminInput = React.createRef();
    clientInput = React.createRef();
    autoSubmit = React.createRef();

    editStore = (event) => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. get the text from that input
        const storeName = this.adminInput.current.value;
        // 3. Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);
    }

    goToStore = () => {
        // TODO : REPLACE PLAYER SHUFFLE WITH GEOLOCATION FUNCTION
        this.props.history.push(`/store/${playerShuffle()}`);
    }

    componentDidMount() {
        // this.goToStore();
    }

    render() {
        const loggedIn = true;

        return (
            <div className="wrapper">
                {loggedIn ?
                    <form className="store-selector" onSubmit={this.editStore}>
                            <h1>Enter a Store</h1>
                            <input type="text" ref={this.adminInput} required placeholder="Store Name"/>
                            <button type="submit">Go to Store</button>
                    </form>
                    :
                    <form className="store-selector">
                            <h2>Finding Your Location</h2>
                            {this.goToStore()}
                    </form>
                }
            </div>
        )
    }
}

export default StorePicker;