import axios from 'axios';
import env from 'react-dotenv';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: 'AIzaSyAK_6kdnbG6BXopoIYWrmXm20RaDjef02I'
    }
});