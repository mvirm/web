const handleSwipe = ({ touchStart, touchEnd, nextSlide, prevSlide }) => {
  // swipe izquierda
  if (touchStart - touchEnd > 50) {
    nextSlide();
  }

  // swipe derecha
  if (touchEnd - touchStart > 50) {
    prevSlide();
  }
};

export default handleSwipe;
