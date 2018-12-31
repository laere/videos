import axios from 'axios';

const KEY = 'AIzaSyA31tkK8K5RICJV9K71rJNva-_k24ClJlQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
