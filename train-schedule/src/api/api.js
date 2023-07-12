import axios from 'axios';

const URL = 'http://20.244.56.144/train/'; // ADD THE BASE URL HERE

const API = axios.create({
  baseURL: URL
});

API.interceptors.request.use((req) => {
  const jwtToken = ''; // ADD THE AUTHORIZATION TOKEN HERE
  req.headers.authorization = `Bearer ${jwtToken}`;
  return req;
});

export const getAllTrains = () => API.get('/trains');
export const getSingleTrain = (id) => API.get(`/trains/${id}`);
