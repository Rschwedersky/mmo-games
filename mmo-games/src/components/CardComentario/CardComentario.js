import { Comentario } from "./CardComentario.styles";
import { useDarkMode } from '../../contexts/darkmode/useDarkMode';


export const CardComentario = ({item}) => {
    const {dark} = useDarkMode();

    return(
    <>
      <div>
          <div>
        <p style={{fontSize:'1.4rem'}}>{item.nome}</p>
        <p style={{fontSize:'0.9rem'}}>{item.email}</p>
        </div>
        <Comentario primary={dark}>{item.comentario}</Comentario> 
      </div>
        <p style={{padding:'10px'}}>Likes: <span style={{color:item.likes>=0?'#0b4200':'#420000'}}>{item.likes}</span> </p>
    </>
        );
};