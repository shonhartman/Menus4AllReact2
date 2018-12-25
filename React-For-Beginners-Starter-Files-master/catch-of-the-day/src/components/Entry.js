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
            const menuItems = item.menuItems
                                .map(item => {
                                    return item.item;
                                })
            
            // 3. Return Edit Menu Form
            return <EditMenuSection 
                        updateMenuSection={this.props.updateMenuSection} 
                        key={index} index={index} 
                        menuHeading={menuHeading} 
                        menuItems={menuItems}
                    />;

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
                <button onClick={this.props.loadSampleData}>Load Sample Data</button>
                {/* RESTAURANT DETAILS */}
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
                {/* EDIT MENU SECTION */}
                <h1>Edit Menu Items</h1>
                {renderHeadingAndItems(menu)}
                {/* ADD MENU SECTION */}
                <MenuSection
                    addMenuSection={this.props.addMenuSection}
                    addMenuItemSection={this.props.addMenuItemSection}
                    restaurant={this.props.restaurant}
                />
            </div>
        )
    }
}

export default Entry;