import { Comentario } from "./CardComentario.styles";
import { useDarkMode } from '../../contexts/darkmode/useDarkMode';


export const CardComentario = ({item}) => {
    const {dark} = useDarkMode();

    return(
    <div style={{display:'flex'}}>
        <div>
        <p style={{fontSize:'1.4rem'}}>{item.nome}</p>
        <p style={{fontSize:'0.9rem'}}>{item.email}</p>
        <Comentario primary={dark}>{item.comentario}</Comentario>     
        </div>
        <p style={{padding:'10px', marginTop:'10px'}}>Likes: <span style={{color:item.likes>=0?'blue':'red'}}>{item.likes}</span> </p>
    </div>
        );
};