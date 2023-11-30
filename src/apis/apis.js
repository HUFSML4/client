import axios from 'axios';

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

export const searchMovies = async (keyword) => {
    let currMovies;
    await serverApi.post(`http://3.36.128.245:8000/searching/`, {"text":keyword}).then((response) => {
        currMovies = response.data.data;
    })
    return currMovies;
}

export const getRecommendMovies = async (navigate, movieTitle) => {
    await serverApi.get(`http://3.36.128.245:8000/searching/recommend/${movieTitle}/`).then((response) => {
        const recommendMovies = response.data.data;
        navigate(`/result`, {state: {"recommendMovies": recommendMovies}});
    })
}