import { useDarkMode } from '../../contexts/darkmode/useDarkMode';

import { FooterStyle } from './Footer.styles';

export const Footer = () =>{
    const state = useDarkMode();
    
   
 
    
 return(
    <FooterStyle primary={state.dark}>
        <h3>Design by <spam style={{ cursor: 'pointer' }} onClick={()=>window.open('https://www.linkedin.com/in/rodrigo-schwedersky/')}>Rschwedersky</spam></h3>
    </FooterStyle>

    );
};