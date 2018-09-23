import React from "react";
import Entry from "./Entry";
import Header from "./Header";
import MenuDisplay from "./MenuDisplay";
import sampleData from "../sample-data";

class App extends React.Component {
    state = {
        restaurants: {}
    };
    addRestaurantDetails = details => {
        // 1. take a copy of the existing state
        const restaurants = {...this.state.restaurant};
        // 2. add our restaurant details to that restaurant variable
        restaurants[`restaurant_${Date.now()}`] = details;
        // 3. set the new restaurants object to state
        this.setState({ restaurants });
    }
    addMenuSection = section => {
        console.log(section);
        // 1. take a copy of the existing state
        const restaurants = {...this.state.restaurant};
        // 2. add our menu section to that restaurant variable
         // 3. set the new restaurants object to state
        this.setState({ restaurants });
    }
    loadSampleData = () => {
        this.setState({ restaurants: sampleData });
    }
    render() {
        const isLoggedIn = true;
        return (

            <div className="catch-of-the-day">
                <div className="menu">
                    <Header />
                    <ul className="fishes">
                        {Object.keys(this.state.restaurants).map(key => <MenuDisplay key={key} menu={this.state.restaurants[key]} /> )}
                    </ul>
                </div>
                {isLoggedIn ?
                <Entry
                    addRestaurantDetails={this.addRestaurantDetails}
                    addMenuSection={this.addMenuSection}
                    loadSampleData={this.loadSampleData}
                />
                :
                ""
                }
            </div>

        )
    }
}

export default App;