const API_KEY = "76c80774554b4bebd47d8175fd79e9e1";

const categories = [
    {
        name: "trending",
        title: "Em Alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
    },
    {
        name: "topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
    },
    {
        name: "comedy",
        title: "Comédias",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    },
    {
        name: "documentaries",
        title: "Documentários",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
    },
]

export const getMovies = async (path: string) => {
    try {
        const url = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Erro: ", error);
        return null;
    }
};

// export const getMovies = async (path: string) => {
//     try {
//         let url = `https://api.themoviedb.org/3${path}`;
//         const response = await fetch(url);
//         const data = await response.json();
//         return await response;
//     } catch (error) {
//         console.log("Erro: ",error)
//     }
// }

export default categories;