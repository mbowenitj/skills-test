/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../App.css';

class ImageGallery extends React.Component {
    render() {
        return (
            <div>
                <Carousel autoPlay interval="5000">
                   <div>
                    <div className="history-banner-container">
                        <div className="history-header-container">
                            <span className="first-number-header">01</span><span className="square">.</span> 
                            <span className="history-header">HISTORY</span><br/>
                        </div>
                        <div className="history-text">
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut 
                            vitae volutpat erat. Suspendisse sagittis leo a orci lobortis, ac
                            vestibulum est vehicula. Cras a sollicitudin orci. Cras euismod pulvinar leo vitae sodales. 
                            Etiam sem mi, sollicitudin non elementum dapibus, fringilla ut quam. Proin suscipit, mauris quis consequat elementum
                            </p>
                        </div>
                    </div>  
                         <img src={require('../assets/images/peak.png')} />
                    </div>
                    <div>
                        <img src={require('../assets/images/los-angels.png')} />
                    </div>
                    <div>
                         <img src={require('../assets/images/hiking.png')} />
                    </div>
                    <div>
                         <img src={require('../assets/images/hiking-1.png')} />
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default ImageGallery;