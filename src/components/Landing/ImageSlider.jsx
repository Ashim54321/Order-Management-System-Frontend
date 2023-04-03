import { useState } from 'react';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'

const images = [
    "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80",
    "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

]

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  return (
    <div className="slider">
      <div className="slider-wrapper" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slider-item">
            <img src={image} alt={`Slider ${index}`} />
          </div>
        ))}
      </div>
      <button className="slider-btn slider-btn-prev" onClick={handlePrev}>
        <AiOutlineArrowLeft className='butt'/>
      </button>
      <button className="slider-btn slider-btn-next" onClick={handleNext}>
        <AiOutlineArrowRight className='butto'/>
      </button>
    </div>
  );
}
