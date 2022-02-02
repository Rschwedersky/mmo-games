import { Zoom } from 'react-slideshow-image';
import { useDarkMode } from '../../contexts/darkmode/useDarkMode';
import { SlideShowConteiner, SlideShowIndicator, SlideShowImg} from './SlideShow.styles';

export const SlideShow = ({lista}) => {
  const {dark} = useDarkMode();

    const zoomOutProperties = {
      indicators: true,
      scale: 0.4,
      indicators: i => (<SlideShowIndicator src={lista[i].image} alt="Screenshoots"/>),
      autoplay:true
    }
    return (
      <SlideShowConteiner primary={dark}>
        <Zoom {...zoomOutProperties}>
          { lista.map((each) => <SlideShowImg key={each.id} src={each.image} alt="Screenshoots" />) }
        </Zoom>
      </SlideShowConteiner>
    )
  }