
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../contexts/darkmode/useDarkMode";
import { CardG, CardGTitle, GamesP, Image, ShowMore, Thumbnail } from "./CardGames.styles";


export const CardGames = ({games}) => {
    const {dark} = useDarkMode();
    const navigate = useNavigate();

return(

<CardG primary={dark} key={games.id} /* onClick={} */>
      <Thumbnail >
        <Image  src={games.thumbnail} alt={games.name} />
      </Thumbnail>
      <CardGTitle primary={dark}>{games.title}</CardGTitle>
      <div >  
      <p>{games.short_description.slice(0,100)}</p> 

        <GamesP>Genre:  {games.genre}</GamesP>  
      </div>
      <ShowMore onClick={()=>navigate(`detail/${games.id}`,)}>Show More</ShowMore>
    </CardG>
  );
};
