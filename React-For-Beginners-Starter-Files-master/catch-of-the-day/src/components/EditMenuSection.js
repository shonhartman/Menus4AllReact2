import React from "react";

class EditMenuSection extends React.Component {
    handleHeadingChange = (event) => {
        // 1. Take a copy of the current heading
        const updatedHeading = {
            ...this.props.restaurant,
            [event.currentTarget.name] : event.currentTarget.value
        };
        this.props.updateMenuSection(this.props.index, updatedHeading);
    }

    render() {
        return  <div className="fish-edit">
                    <input onChange={this.handleHeadingChange} type="text" name="heading" value={this.props.menuHeading} />
                    { this.props.menuItems.map( (item, index) =>
                        <input onChange={this.handleHeadingChange} key={index} name="item" type="text" value={item}/>)
                    }
                </div>
    }
}

export default EditMenuSection;