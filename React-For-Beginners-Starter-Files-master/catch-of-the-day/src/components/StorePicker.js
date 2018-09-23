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
        const storeName = this.adminInput.value.value;
        // 3. Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);
    }

    goToStore = () => {
        console.log(this.props);
        // event.preventDefault();
        // this.autoSubmit.submit();
        // const storeName = this.clientInput.value.value;
        // this.props.history.push(`/store/${storeName}`);
    }

    componentDidMount() {
        this.goToStore();
        this.props.history.push(`/store/${playerShuffle()}`);
    }

    render() {
        const loggedIn = false;

        return (
            <div className="wrapper">
                {loggedIn ?
                    <form className="store-selector" onSubmit={this.editStore}>
                            <h2>Enter a Store</h2>
                            <input type="text" ref={this.adminInput} required placeholder="Store Name"/>
                            <button type="submit">Go to Store</button>
                    </form>
                    :
                    <form className="store-selector" onSubmit={this.goToStore}>
                            <h2>Finding Your Location</h2>
                            {/* <input type="text" ref={this.clientInput} required placeholder="Store Name" defaultValue={playerShuffle()}/> */}
                            {/* <button type="submit">{this.goToStore()}</button> */}
                    </form>
                }
            </div>
        )
    }
}

export default StorePicker;