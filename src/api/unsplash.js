import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7a9c44a91eb008de86234f8ad524998296f6dfb0c6f6e9281141f973284565d4'
    }
});