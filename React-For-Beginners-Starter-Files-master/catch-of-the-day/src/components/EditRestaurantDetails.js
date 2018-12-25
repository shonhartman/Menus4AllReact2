import React from "react";

class EditRestaurantDetails extends React.Component {
    handleChange = event => {
        // 1. Take a copy of the restaurant details
        const updatedDetails = {
            ...this.props.restaurant,
            [event.currentTarget.name]: event.currentTarget.value
        }
        // 2. Update the restaurant details
        this.props.updateRestaurantDetails(updatedDetails)
    }
    render() {
        return  <div>
                    <h1>Edit Restaurant Details</h1>
                    <div className="fish-edit">
                        <input type="text" name="name" onChange={this.handleChange} value={this.props.restaurant.name} placeholder="restaurant name" />
                        <input type="text" name="latitude"  onChange={this.handleChange} value={this.props.restaurant.latitude} placeholder="latitude" />
                        <input type="text" name="longitude"  onChange={this.handleChange} value={this.props.restaurant.longitude} placeholder="longitude" />
                        <input type="text" name="address" onChange={this.handleChange} value={this.props.restaurant.address} placeholder="address" />
                        <input type="text" name="phone" onChange={this.handleChange} value={this.props.restaurant.phone} placeholder="phone" />
                        <input type="text" name="hours1" onChange={this.handleChange} value={this.props.restaurant.hours1} placeholder="hours" />
                        <input type="text" name="hours2" onChange={this.handleChange} value={this.props.restaurant.hours2} placeholder="alternate hours" />
                        <input type="text" name="image" onChange={this.handleChange} value={this.props.restaurant.image} placeholder="image-url" />
                        <input type="text" name="site" onChange={this.handleChange} value={this.props.restaurant.site} placeholder="website" />
                        <input type="text" name="facebook" onChange={this.handleChange} value={this.props.restaurant.facebook} placeholder="facebook" />
                        <input type="text" name="instagram" onChange={this.handleChange} value={this.props.restaurant.instagram} placeholder="instagram" />
                        <input type="text" name="caption" onChange={this.handleChange} value={this.props.restaurant.caption} placeholder="caption" />
                        <input type="text" name="cab" onChange={this.handleChange} value={this.props.restaurant.cab} placeholder="cab" />
                        <textarea type="text" name="bus" onChange={this.handleChange} value={this.props.restaurant.bus} placeholder="bus" />
                        <textarea type="text" name="summary" onChange={this.handleChange} value={this.props.restaurant.summary} placeholder="summary" ></textarea>
                    </div>
                </div>

    }
}

export default EditRestaurantDetails;