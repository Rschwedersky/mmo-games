export const fetchAllNoticias = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_URL, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": process.env.REACT_APP_HOST,
          "x-rapidapi-key": process.env.REACT_APP_KEY
        }
      })
      const listaNoticias = await response.json();
      return listaNoticias;
    } catch (erro) {
      console.error(erro.message);
    }
  };






