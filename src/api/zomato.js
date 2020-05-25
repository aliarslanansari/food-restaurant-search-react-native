import axios from 'axios';

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers:{
        "user-key":"f5ceb4f26dc84fe71ce1d8d0df3021c7"
    }
});