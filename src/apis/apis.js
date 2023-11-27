import axios from 'axios';

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

export const searchMovies = async (keyword) => {
    let currMovies;
    await serverApi.post(`/searching`, {"text":keyword}).then((response) => {
        currMovies = response.data;
    })
    return currMovies;
}

export const getRecommendMovies = async (navigate, movieTitle) => {
    await serverApi.get(`/searching/recommend/${movieTitle}`).then((response) => {
        const recommendMovies = response.data;
        navigate(`/result`, {state: {"recommendMovies": recommendMovies}});
    })
}