import React from "react";
import firebase from "firebase";
import Entry from "./Entry";
import Header from "./Header";
import MenuDisplay from "./MenuDisplay";
import Login from "./Login";
import sampleData from "../sample-data";
import base from "../base";

class App extends React.Component {
    state = {
        restaurant: {},
        uid: null
    };

    componentDidMount() {
        const { params } = this.props.match;
        this.ref = base.syncState(`${params.storeId}/restaurant`, {
            context: this,
            state: "restaurant"
        });
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }
    authenticate = () => {
        const authProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(authProvider).then(result => {
                {console.log(result)}
                this.setState({
                    uid: result.user.uid
                })
            }
        );

    }
    logout =  () => {
        firebase.auth().signOut();
        this.setState({ uid : null })
    }
    addRestaurantDetails = details => {
        // 1. take a copy of the existing state
        let restaurant = {...this.state.restaurant};
        // 2. add our restaurant details to that restaurant variable
        restaurant = details
        // 3. set the new restaurants object to state
        this.setState({ restaurant });
    }
    updateRestaurantDetails = (updatedDetails) => {
        // 1. Take a copy of the current state
        let restaurant = {...this.state.restaurant}
        // 2. Update that state
        restaurant = updatedDetails
        // 3. Set state
        this.setState({ restaurant })
    }
    addMenuSection = section => {
        // 1. take a copy of the existing state
        const restaurant = {...this.state.restaurant};
        // 2. add our menu section to that restaurant variable
        restaurant.menuBlocks.push(section);
         // 3. set the new restaurants object to state
        this.setState({ restaurant });
    }
    updateMenuSection = (key, updatedSection, index) => {
        // 1. Take a copy of the current section
        let restaurant = {...this.state.restaurant};
        // 2. Add our updated menu section to our copied restaurant variable\
        restaurant = updatedSection;
        // 3. Set the updated variable to state
        this.setState({ restaurant });
    }
    addMenuItemSection = (section, index) => {
        // 1. take a copy of the existing state
        const restaurant = {...this.state.restaurant};
        // Guard : If there are no Menu Blocks, end the function
        if (restaurant.menuBlocks.length - 1 < index) {
            console.log("We tried to edit a block that doesn't exist yet");
            return;
        }
        // Guard : If there isn't any Menu Items, return an empty array
        restaurant.menuBlocks[index].menuItems = restaurant.menuBlocks[index].menuItems ? restaurant.menuBlocks[index].menuItems : [];
        // 2  Add our Menu Items to our copied restaurant variable
        restaurant.menuBlocks[index].menuItems.push(section);
        // 3. Set that updated variable to state
        this.setState({ restaurant });
    }
    loadSampleData = () => {
        this.setState({ restaurant: sampleData });
    }
    render() {
        // TODO : Set the Current Restaurant returned from the GetLocation Function
        // let currentRestaurant = restaurants.filter(restaurant => restaurant.url == this.props.match.url);
        const logout = <button className="facebook" onClick={this.logout}>Log Out</button>
        
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                {/* TODO : Filter by Router Match */}
                    <Header restaurant={this.state.restaurant} />
                    <ul className="fishes">
                        <MenuDisplay menu={this.state.restaurant.menuBlocks} />
                    </ul>
                    {!this.state.uid ? <Login authenticate={this.authenticate} uid={this.state.uid} /> : logout}
                </div>
                {this.state.uid ?
                <Entry
                    addRestaurantDetails={this.addRestaurantDetails}
                    updateRestaurantDetails={this.updateRestaurantDetails}
                    addMenuSection={this.addMenuSection}
                    addMenuItemSection={this.addMenuItemSection}
                    updateMenuSection={this.updateMenuSection}
                    loadSampleData={this.loadSampleData}
                    restaurant={this.state.restaurant}
                    menu={this.state.restaurant.menuBlocks}
                />
                :
                ""
                }
            </div>
        )
    }
}

export default App;