import React from "react";

class EditMenuSection extends React.Component {
    handleHeadingChange = (event, index) => {
        // console.log(key)
        // 1. Take a copy of the current heading
        const updatedHeading = {
            [this.props.menuHeading] : event.currentTarget.value
            // [event.currentTarget.value] : event.currentTarget.value
        };
        console.log(this.props.index.toString())
        this.props.updateMenuSection(this.props.index.toString(), updatedHeading)
        // console.log(updatedHeading)

    }
    handleItemChange = () => {
        console.log("Handling Item Change")
    }
    render() {
        return  <div className="fish-edit">
                    <input onChange={this.handleHeadingChange} type="text" name="heading" value={this.props.menuHeading} />
                    { this.props.menuItems.map( (item, index) =>
                        <input onChange={this.handleItemChange} key={index} type="text" value={item}/>)
                    }
                </div>
    }
}

export default EditMenuSection;