import React, {useState, useEffect} from 'react';
import * as API from '../../api/api.js';

const AllTrains = () => {
  const [allTrainsData, setAllTrainsData] = useState([]);

  useEffect(() => {
    const fetchTrainData = async () => {
      const {data} = await API.getAllTrains();
      setAllTrainsData(data);
    };
    fetchTrainData();
  }, []);

  return <div>AllTrains</div>;
};

export default AllTrains;
