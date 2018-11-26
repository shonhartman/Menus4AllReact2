import React from "react";
import AddRestaurantDetails from "./AddRestaurantDetails";
import MenuSection from "./MenuSection";
import EditRestaurantDetails from "./EditRestaurantDetails";
import EditMenuSection from "./EditMenuSection";

class Entry extends React.Component {

    render() {
        const menu = this.props.menu;

        const menuSections = (item, index) => {
            // 1. Declare Menu Heading Variable
            const menuHeading = [item.heading];
            // Guard : Return an empty array if there aren't any Menu Items
            item.menuItems = item.menuItems ? item.menuItems : [];
            // 2. Map over Menu Items under each Heading
            const menuItems = item.menuItems.map(item => item.item);
            // 3. Return Edit Menu Form
            // return  <div>
            //             <h2>{menuHeading}</h2>
            //             <ul>{menuItems.map(item => <li>{item}</li>)}</ul>
            //         </div>;
            return <EditMenuSection updateMenuSection={this.props.updateMenuSection} key={index} index={index} menuHeading={menuHeading} menuItems={menuItems}/>;

        }
        const renderHeadingAndItems = (menu) => {
            // Check for Menu Object
            if(menu) {
                return (
                    menu.map(menuSections)
                )
            }
        }

        return (
            <div className="inventory">
                <h1>Entry</h1>
                <button onClick={this.props.loadSampleData}>Load Sample Data</button>

                {renderHeadingAndItems(menu)}

                {/* {Object.keys(menuSections).map(menuSection => <EditMenuSection/>)} */}
                {/* {menuSections.map(menuItem => <EditMenuSection />)} */}

                {/* {Object.keys(this.props.menu).map(menu => <EditMenuSection /> )} */}

                <MenuSection
                    addMenuSection={this.props.addMenuSection}
                    addMenuItemSection={this.props.addMenuItemSection}
                    restaurant={this.props.restaurant}
                />


                {this.props.restaurant.name && this.props.restaurant.longitude ?
                    <EditRestaurantDetails
                        updateRestaurantDetails={this.props.updateRestaurantDetails}
                        restaurant={this.props.restaurant}
                    />
                    :
                    <AddRestaurantDetails
                        addRestaurantDetails={this.props.addRestaurantDetails}
                        restaurant={this.props.restaurant}
                    />
                }
            </div>
        )
    }
}

export default Entry;