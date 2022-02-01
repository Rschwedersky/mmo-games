import { Zoom } from 'react-slideshow-image';
import { useDarkMode } from '../../contexts/darkmode/useDarkMode';
import { SlideShowConteiner } from './SlideShow.styles';

export const SlideShow = ({lista}) => {
  const {dark} = useDarkMode();

    const zoomOutProperties = {
      indicators: true,
      scale: 0.4,
      indicators: i => (<img style={{width: "100px", height:"100px", margin:"5px", borderRadius:'10px'}} src={lista[i].image}/>),
      autoplay:true
    }
    return (
      <SlideShowConteiner primary={dark}>
        <Zoom {...zoomOutProperties}>
          { lista.map((each) => <img key={each.id} style={{width: "100%", height:"100%", borderRadius:'10px'}} src={each.image} alt="Screenshoots" />) }
        </Zoom>
      </SlideShowConteiner>
    )
  }