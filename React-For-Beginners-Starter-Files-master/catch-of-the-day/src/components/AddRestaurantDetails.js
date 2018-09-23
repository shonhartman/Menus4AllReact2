import React from "react";

class AddRestaurantDetails extends React.Component {

    // Component Refs
    nameRef = React.createRef();
    latitudeRef = React.createRef();
    longitudeRef = React.createRef();
    addressRef = React.createRef();
    phoneRef = React.createRef();
    hours1Ref = React.createRef();
    hours2Ref = React.createRef();
    imageRef = React.createRef();
    siteRef = React.createRef();
    facebookRef = React.createRef();
    instagramRef = React.createRef();
    captionRef = React.createRef();
    summaryRef = React.createRef();
    busRef = React.createRef();
    cabRef = React.createRef();


    addDetails = (event) => {
        // 1. stop the form from submitting
        event.preventDefault();
        const details = {
            name: this.nameRef.value.value,
            latitude: parseInt(this.latitudeRef.value.value),
            longitude: parseInt(this.longitudeRef.value.value),
            address: this.addressRef.value.value,
            phone: this.phoneRef.value.value,
            hours1: this.hours1Ref.value.value,
            hours2: this.hours2Ref.value.value,
            image: this.imageRef.value.value,
            site: this.siteRef.value.value,
            facebook: this.facebookRef.value.value,
            instagram: this.instagramRef.value.value,
            caption: this.captionRef.value.value,
            summary: this.summaryRef.value.value,
            bus: this.busRef.value.value,
            cab: this.cabRef.value.value,
        }
        this.props.addRestaurantDetails(details);
        // 2. refresh the form
        event.currentTarget.reset();
    }
    render() {
        return (
            <form className="fish-edit" onSubmit={this.addDetails}>
                <input type="text" name="name" ref={this.nameRef} placeholder="name" />
                <input type="text" name="latitude" ref={this.latitudeRef} placeholder="latitude" />
                <input type="text" name="longitude" ref={this.longitudeRef} placeholder="longitude" />
                <input type="text" name="address" ref={this.addressRef} placeholder="address" />
                <input type="text" name="phone" ref={this.phoneRef} placeholder="phone" />
                <input type="text" name="hours1" ref={this.hours1Ref} placeholder="hours1" />
                <input type="text" name="hours2" ref={this.hours2Ref} placeholder="hours2" />
                <input type="text" name="image" ref={this.imageRef} placeholder="image" />
                <input type="text" name="site" ref={this.siteRef} placeholder="site" />
                <input type="text" name="facebook" ref={this.facebookRef} placeholder="facebook" />
                <input type="text" name="instagram" ref={this.instagramRef} placeholder="instagram" />
                <input type="text" name="caption" ref={this.captionRef} placeholder="caption" />
                <input type="text" name="summary" ref={this.summaryRef} placeholder="summary" />
                <input type="text" name="bus" ref={this.busRef} placeholder="bus" />
                <input type="text" name="cab" ref={this.cabRef} placeholder="cab" />
                <button type="submit">Add Restaurant Details</button>
            </form>
        )
    }
}

export default AddRestaurantDetails;