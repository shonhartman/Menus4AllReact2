import React from "react";

class MenuDisplay extends React.Component {
    render() {
        const menu = this.props.menu;

        const menuSections = (item, index) => {
            // 1. Declare Menu Heading Variable
            const menuHeading = [item.heading];
            // Guard : Return an empty array if there aren't any Menu Items
            item.menuItems = item.menuItems ? item.menuItems : [];
            // 2. Map over Menu Items under each Heading
            const menuItems = item.menuItems.map(item => item.item);
            // 3. Return HTML Structure for Menu Display
            return  <div key={index}>
                        <h2>{menuHeading}</h2>
                        <ul>{menuItems.map(item => <li key={item}>{item}</li>)}</ul>
                    </div>;
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
                <ul>
                    {renderHeadingAndItems(menu)}
                </ul>
        )
    }
}

export default MenuDisplay;