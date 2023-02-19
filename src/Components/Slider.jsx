import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
const Slider = () => {
  const images = [
    "https://img.ltwebstatic.com/images3_ach/2023/02/14/1676360035b3654107b75d08ee6f483e261c861f6e.gif",
    "https://img.ltwebstatic.com/images3_ach/2023/01/09/1673229521deae7c92b3908022313bc0863be6fbac_thumbnail_1920x.webp",
    "https://img.ltwebstatic.com/images3_ach/2023/02/13/1676274726f92ce042521c3598ae66be98fb9aa027_thumbnail_1920x.webp",
    "https://img.ltwebstatic.com/images3_ach/2023/01/30/16750612773c399594b2cc84a4aad280e72fafcea7.gif",
  ];
  return (
    <div className="slider">
      <Carousel
     showArrows={true}
     showIndicators={false}
     showStatus={false}
     showThumbs={false}
     autoPlay={true}
     interval={2000}
     infiniteLoop={true}
      >
     {images.map((img,i)=>{
        return <img className="image" src={img} alt="i" key={i} />
     })}
    
      </Carousel>
    </div>
  );
};

export default Slider;
