import React from "react";
import Entry from "./Entry";
import Header from "./Header";

class App extends React.Component {
    render() {
        return (

            <div className="catch-of-the-day">
                <div className="menu">
                    <Header />
                </div>
                <Entry />
            </div>

        )
    }
}

export default App;