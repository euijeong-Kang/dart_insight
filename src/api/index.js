import axios from 'axios';

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return instance;
}

export const instance = createInstance();
export const contentData = createInstanceWithAuth('api/v1/post');
