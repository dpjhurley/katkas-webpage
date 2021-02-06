import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import img1 from '../../images/G0411249.JPG';
import img2 from '../../images/GOPR1723.JPG';
import img3 from '../../images/GOPR1821.JPG';
import img4 from '../../images/GOPR1995.JPG';
import img5 from '../../images/GOPR2222.JPG';
import img6 from '../../images/GOPR2238.JPG';
import img7 from '../../images/GOPR2338.JPG';
import img8 from '../../images/GOPR2711.JPG';
import img9 from '../../images/GOPR2741.JPG';
import img10 from '../../images/GOPR2799.JPG';

const imageArray = [
  {
    src : img1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src : img2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src : img3,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src : img4,
    altText: 'Slide 1',
    caption: 'Slide 1'},
  {
    src : img5,
    altText: 'Slide 1',
    caption: 'Slide 1'},
  {
    src : img6,
    altText: 'Slide 1',
    caption: 'Slide 1'},
  {
    src : img7,
    altText: 'Slide 1',
    caption: 'Slide 1'},
  {
    src : img8,
    altText: 'Slide 1',
    caption: 'Slide 1'},
  {
    src : img9,
    altText: 'Slide 1',
    caption: 'Slide 1'},
  {
    src : img10,
    altText: 'Slide 1',
    caption: 'Slide 1'
  }
]

const CarouselElm = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === imageArray.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }
        
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? imageArray.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = imageArray.map((imageArray) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={imageArray.src}
      >
        <img className="carousel__image" src={imageArray.src} alt={imageArray.altText} />
        <CarouselCaption captionText={imageArray.caption} captionHeader={imageArray.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={imageArray} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}
 
export default CarouselElm;

{/* <div className="carousel">
            <div className="carousel__image" style={{background: `no-repeat center / cover url(${imgDisplayed})`}}>
                <button className="carousel__btn" type="button"><i className="fas fa-angle-left fa-9x"></i></button>
                <button className="carousel__btn" type="button"><i className="fas fa-angle-right fa-9x"></i></button>
            </div>
        </div> */}

       
        
        
        