const { API_URL, API_KEY } = require("../constants");

const getApiUrl = (searchText, currentPage) => {
  const searchIsOn = searchText.length;
  const isNotOnFirstPage = currentPage > 1;

  //cette condition a la même URL pour le moment mais elle sera utile si on veut display une liste sans avoir fait de recherche au préalable

  if (searchIsOn) {
    return `${API_URL}/3/search/movie?api_key=${API_KEY}&language=fr&query=${searchText}&page=${currentPage}`;
  }

  if (isNotOnFirstPage && searchIsOn) {
    return `${API_URL}/3/search/movie?api_key=${API_KEY}&language=fr&query=${searchText}&page=1`;
  }
  return "";
};

export const getPosterApi = (name) => {
  return `https://image.tmdb.org/t/p/w300${name}`;
};

export default getApiUrl;
