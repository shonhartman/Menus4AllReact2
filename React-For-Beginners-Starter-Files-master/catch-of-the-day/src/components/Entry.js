import React from "react";
import AddRestaurantDetails from "./AddRestaurantDetails";
import MenuSection from "./MenuSection";

class Entry extends React.Component {
    render() {
        return (

            <div className="inventory">
                <h2>Entry</h2>
                <button onClick={this.props.loadSampleData}>Load Sample Data</button>
                <AddRestaurantDetails addRestaurantDetails={this.props.addRestaurantDetails} />
                <MenuSection addMenuSection={this.props.addMenuSection} />
            </div>

        )
    }
}

export default Entry;