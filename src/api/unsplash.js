import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e4b97ca1f0d8ebc3a28e3524ed8ea3561fae3bdd9c1538827d930c38d31357e8'
    }
})