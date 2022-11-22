import "./Carrousel.scss";
import { useState } from 'react';

function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousPicture = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length -1 : currentIndex -1;
    setCurrentIndex(newIndex);
  }

  const nextPicture = () => {
    const isLastSlide = currentIndex === pictures.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <section className="Carrousel">
      <img 
        className="arrow leftArrow" 
        src="/images/leftArrow.svg" 
        alt="Diapo précédente"
        onClick={previousPicture}
        style={{ display: `${pictures.length === 1 && 'none'}` }}
        >
      </img>
      <img 
        className="arrow rightArrow" 
        src="/images/rightArrow.svg" 
        alt="Diapo suivante"
        onClick={nextPicture}
        style={{ display: `${pictures.length === 1 && 'none'}` }}
        >
      </img>
      <div className="counter title">{currentIndex + 1}/{pictures.length}</div>
      <div 
        style={{ backgroundImage: `url(${pictures[currentIndex]})`, transition: "300ms" }} 
        className="Carrousel__picture" >  
      </div>
    </section>
  );
}

export default Carrousel;
