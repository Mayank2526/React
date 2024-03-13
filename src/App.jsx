import React, { useState, useEffect } from 'react';
import Search from './Search';
import DataList from './DataList';
import PostDetails from './PostDetails';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 50;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const json = await response.json();
        setData(json);
        const limitedData = json.slice(0, 100);
        setData(limitedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <Router>
      <>
        <h2>Welcome</h2>
       
        <Routes>
          <Route path="/" element={<Search data={currentPosts} />} />
          <Route path="/post/:postId" element={<PostDetails data={data} />} />
        </Routes>
        {currentPage > 1 && (
          <Link className='btn' to="/" onClick={prevPage}>Previous Page</Link>
        )}
        {data.length > currentPage * postsPerPage && (
          <Link className='btn' to="/" onClick={nextPage}>Next Page</Link>
        )}
      </>
    </Router>
  );
}

export default App;