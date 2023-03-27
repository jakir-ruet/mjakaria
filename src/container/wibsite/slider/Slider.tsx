import { useState } from 'react';
import SliderItems from './components/SliderItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? SliderItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    console.log(previousSlide);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === SliderItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    console.log(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 group">
      <div
        style={{ backgroundImage: `url(${SliderItems[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FontAwesomeIcon onClick={previousSlide} icon={faChevronLeft} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FontAwesomeIcon onClick={nextSlide} icon={faChevronRight} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {SliderItems.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <FontAwesomeIcon icon={faDotCircle} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Slider;
