

export const CardGames = ({games}) => {
    


return(

<div key={games.id}>
      <div >
        <img  src={games.thumbnail} alt={games.name} />
      </div>
      <h2 >{games.title}</h2>
      <div >
        <p>{games.short_description}</p>
        <p>{games.game_url}</p>
        <p>{games.genre}</p>
        <p>{games.platform}</p>
        <p>{games.publisher}</p>
        <p>{games.developer}</p>
        <p>{games.release_date}</p>
        
      </div>
    </div>
  );
};
