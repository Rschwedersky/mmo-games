import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../contexts/darkmode/useDarkMode";
import { CardG, Image, ShowMore, Thumbnail } from "./CardGames.styles";


export const CardGames = ({games}) => {
    const {dark} = useDarkMode();
    const navigate = useNavigate();
const params =games.id;
return(

<CardG primary={dark} key={games.id} /* onClick={} */>
      <Thumbnail >
        <Image  src={games.thumbnail} alt={games.name} />
      </Thumbnail>
      <h2>{games.title}</h2>
      <div >  
      <p>{games.short_description.slice(0,100)}</p> 

        <p>{games.genre}</p>  
      </div>
      <ShowMore onClick={()=>navigate(`detail/${games.id}`,)}>Show More</ShowMore>
    </CardG>
  );
};
