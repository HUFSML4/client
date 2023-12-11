import axios from 'axios';

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

export const searchMovies = async (keyword) => {
    let currMovies;
    await serverApi.post(`https://port-0-hufsml-1gksli2alpnlcd7w.sel4.cloudtype.app/searching/`, {"text":keyword}).then((response) => {
        currMovies = response.data.data;
    })
    return currMovies;
}

export const getRecommendMovies = async (navigate, movieTitle, recommendType) => {
    await serverApi.get(`https://port-0-hufsml-1gksli2alpnlcd7w.sel4.cloudtype.app/searching/recommend/${movieTitle}/`, {"recommend_type": recommendType}).then((response) => {
        const recommendMovies = response.data.data;
        navigate(`/result`, {state: {"recommendMovies": recommendMovies}});
    })
}