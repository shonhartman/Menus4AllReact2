import React from "react";

class MenuSection extends React.Component {

    // Component Refs
    headingRef = React.createRef();
    itemRef = React.createRef();
    selectedMenuSectionRef = React.createRef();


    addHeading = (event) => {
        // 1. stop the form from submitting
        event.preventDefault();
        const heading = {
            heading: this.headingRef.current.value,
        }
        this.props.addMenuSection(heading);
        // 2. refresh the form
        event.currentTarget.reset();
    }

    addMenuItems = (event) => {
        // 1. stop the form from submitting
        event.preventDefault();
        const index = this.selectedMenuSectionRef.current.value;
        const item = {
            item: this.itemRef.current.value,
        }
        this.props.addMenuItemSection(item, index);
        // 2. refresh the form
        event.currentTarget.reset();
    }

    renderSectionOptions = () => {
        let options = this.props.restaurant.menuBlocks;
        options = options ? options : [];
        return options.map((option, index) => <option key={index} value={index}>{option.heading}</option>)
    }

    render() {
        return (
            <div className="menu-section">
            <select name="" id="" ref={this.selectedMenuSectionRef}>
                {this.renderSectionOptions()}
            </select>
                <div className="heading-wrapper">
                    <h1>Add Menu Section</h1>
                    <form className="fish-edit" onSubmit={this.addHeading}>
                        <input type="text" name="heading" ref={this.headingRef} placeholder="heading" />
                        <button type="submit">Add Heading</button>
                    </form>
                </div>
                <div className="add-menu-items">
                    <h1>Add Menu Items</h1>
                    <form className="fish-edit" onSubmit={this.addMenuItems}>
                        <input type="text" name="item" ref={this.itemRef} placeholder="menu item" />
                        <button className="edit-facade" type="submit">Add Menu Item</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default MenuSection;