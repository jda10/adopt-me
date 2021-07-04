import React, { Component } from 'react';


class Carousel extends Component {
    state = { 
        active : 0,
     }

     static defaultProps = {
         images: ['http://pets-images.dev-apis.com/pets/none.jpg']
     }

     handleIndexClick = (event)=> {
        this.setState({
            active: +event.target.dataset.index
         });
     }
    render() { 

        const {active} = this.state;
        const {images} = this.props;1
        return (
            <div className="carousel">
                <img src={images[active]} alt="animal"></img>
                <div className="carousel-smaller">
                    {images.map((photo, index) => (
                        <img
                        key={photo}
                        src={photo}
                        className={index===active ? "active" : ""}
                        alt="animal thumbnail"
                        data-index={index}
                        onClick={this.handleIndexClick.bind(this)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
 
export default Carousel;