import React, { useState, useEffect } from 'react';
import Serch from './Search';
import DataList from './DataList';
import PostDetails from './PostDetails'; // Import PostDetails component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <>
        <h2>Welcome</h2>
        <Routes>
          <Route path="/" element={<Serch data={data} />} />
          <Route path="/post/:postId" element={<PostDetails data={data} />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
