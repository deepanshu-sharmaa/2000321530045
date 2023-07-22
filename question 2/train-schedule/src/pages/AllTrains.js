import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AllTrains() {
  const [trains, setTrains] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://20.244.56.144/train/trains", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setTrains(data);
      setIsLoading(false);
      console.log("Train data fetched successfully:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>All Trains</h1>
      <ul>
        {isLoading ? (
          <li>Loading...</li>
        ) : trains.length > 0 ? (
          trains.map((train) => (
            <li key={train.trainNumber}>
              <Link to={`/train/${train.trainNumber}`}>{train.trainName}</Link>
            </li>
          ))
        ) : (
          <li>No trains available.</li>
        )}
      </ul>
    </div>
  );
}

export default AllTrains;
