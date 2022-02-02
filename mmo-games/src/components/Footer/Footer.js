import { useDarkMode } from '../../contexts/darkmode/useDarkMode';
import { GiSuperMushroom } from 'react-icons/gi';
import { FooterStyle, Span } from './Footer.styles';

export const Footer = () =>{
    const state = useDarkMode();
    
   
 
    
 return(
    <FooterStyle primary={state.dark}>
        <h3>Design by <Span onClick={()=>window.open('https://www.linkedin.com/in/rodrigo-schwedersky/')}><GiSuperMushroom/> Rschwedersky</Span></h3>
    </FooterStyle>

    );
};
