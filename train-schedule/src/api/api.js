import axios from 'axios';

const URL = 'http://20.244.56.144/train/'; // ADD THE BASE URL HERE

const API = axios.create({
  baseURL: URL
});

const getToken = async() =>{
  let {data} = await axios.post("http://20.244.56.144/train/auth", {
    companyName: "Hyderabad Trains",
    ownerName: "Devanshi Joshi",
    rollNo: "20BK1A6615",
    ownerEmail: "developwithdev@gmail.com",
    clientID: "10d1eaff-7173-42d2-a57c-61b358ed8db6",
    clientSecret: "SllforGFtMPtByEX"
  })
  return data.access_token
}

// console.log(await getToken())

API.interceptors.request.use(async(req) => {
  const jwtToken = await getToken()
  req.headers.authorization = `Bearer ${jwtToken}`;
  return req;
});

export const getAllTrains = () => API.get('/trains');
export const getSingleTrain = (id) => API.get(`/trains/${id}`);
