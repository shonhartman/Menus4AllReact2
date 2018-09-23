import React from "react";

class MenuSection extends React.Component {

    // Component Refs
    headingRef = React.createRef();

    addHeading = (event) => {
        // 1. stop the form from submitting
        event.preventDefault();
        const heading = {
            heading: this.headingRef.value.value,
        }
        this.props.addMenuSection(heading);
        // 2. refresh the form
        event.currentTarget.reset();
    }

    render() {
        return (
            <div className="heading-wrapper">
                <h1>Menu Section</h1>
                <form className="fish-edit" onSubmit={this.addHeading}>
                    <input type="text" name="heading" ref={this.headingRef} placeholder="heading" />
                    <button type="submit">Add Heading</button>
                </form>
            </div>
        )
    }
}

export default MenuSection;