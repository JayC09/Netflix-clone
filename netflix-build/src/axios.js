import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})
// 375169ad677f656fb17e84b6c736b7ce

export default instance;