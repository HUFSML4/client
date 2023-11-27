import axios from 'axios';

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

export const searchMovies = async (keyword) => {
    await serverApi.post(`/searching`, {"text":keyword}).then((response) => {
        console.log(response);
    })
}

export const recommendMovies = async (movieTitle) => {
    await serverApi.get(`/searching/recommend/${movieTitle}`).then((response) => {
        console.log(response);
    })
}