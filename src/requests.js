const API_KEY = '76592f12cad9234e1be53581c60446d6';

const requests = {
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}`,
    fetchGenres : `/genre/movie/list?api_key=${API_KEY}`,
};

export default requests;