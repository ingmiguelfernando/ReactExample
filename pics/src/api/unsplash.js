import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 24a6c419f964e9f3c7adac87bdca4a9622161b208d3e828df701547642670b7b'
    }
});