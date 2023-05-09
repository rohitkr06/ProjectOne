import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img11 from '../assets/3.jpg';
import img22 from '../assets/4.jpg';

const Services = () => {
    return (
        <div className="services">
            <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>
                <div>
                    <img src={img11} alt="Item1" />
                    <p className='legend'>Full Stack</p>
                </div>

                <div>
                    <img src={img22} alt="Item2" />
                    <p className='legend'>Peer to Peer support</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Services