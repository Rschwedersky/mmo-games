


export const CardComentario = ({item}) => {


    return(
    <div style={{display:'flex'}}>
        <div>
        <p>{item.nome}</p>
        <p>{item.email}</p>
        <p>{item.comentario}</p>
            
        </div>
        <p>{item.likes}</p>
    </div>
        );
};