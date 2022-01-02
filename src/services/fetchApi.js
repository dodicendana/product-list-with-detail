import axios from 'axios';

const fetchApi = (method, url, reqData) => {
    return axios({
        method: method,
        url: url,
        data: reqData
    }).then(res => res && res.data)
    .catch(err => alert(err));
}

export default fetchApi;