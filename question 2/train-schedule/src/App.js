import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllTrains from './pages/AllTrains';
import './App.css';

const data1 = {
  clientID: "68303ee1-59b0-41d5-aacf-495f0e02a067",
  companyName: "Train Central",
  clientSecret: "NGDjkbfeENRdnZuY",
  ownerName: "Deepanshu Sharma", //used 'Ram' to register
  ownerEmail: "deepanshusharma9897@gmail.com", // used 'ram@abc.edu' to register
  rollNo: "2000321530045"
};

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://20.244.56.144/train/auth", {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(data1)
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllTrains />} />
      </Routes>
    </Router>
  );
}

export default App;
