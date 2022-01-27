export const fetchAllAPI = async (folder) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_URL}${folder}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": process.env.REACT_APP_HOST,
          "x-rapidapi-key": process.env.REACT_APP_KEY
        }
      })
      const listaItems = await response.json();
      return listaItems;
    } catch (erro) {
      console.error(erro.message);
    }
  };






