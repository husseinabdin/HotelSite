import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PopularData from './PopData';
import Slider from "react-slick";





const Cards = () => {
    var settings = {
        dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
      };
    
     return (
    <div>
<Slider {...settings}>
{PopularData.map((value)=>{
    return(
       <div className="cards">
        <div className="item">
            <div className="imgae">
                <img src={value.image} alt="" />
                <i className='fas fa-map-marker-alt'>
                <label >{value.country}</label></i>
            </div>
            <div className="rate">
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
            </div>
            <div className="details">
                <h2>{value.name}</h2>
                <div className='boarder'></div>
                <h3>
                   {value.price} / <span>Per Night</span>
                </h3>
            </div>
        </div>
       </div>
    )
})}
 </Slider>
    </div>
    
  )
}

export default Cards