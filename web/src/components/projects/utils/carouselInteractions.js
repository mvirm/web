import handleSwipe from "./handleSwipe";

const carouselInteractions = ({
  setIsPaused,
  goToNextSlide,
  setTouchStart,
  setTouchEnd,
  touchStart,
  touchEnd,
  nextSlide,
  prevSlide,
}) => {
  return {
    onMouseEnter: () => setIsPaused(true),

    onMouseLeave: () => {
      setIsPaused(false);
      goToNextSlide();
    },

    onTouchStart: (e) => {
      setTouchStart(e.targetTouches[0].clientX);
    },

    onTouchMove: (e) => {
      setTouchEnd(e.targetTouches[0].clientX);
    },

    onTouchEnd: () =>
      handleSwipe({
        touchStart,
        touchEnd,
        nextSlide,
        prevSlide,
      }),
  };
};

export default carouselInteractions;
