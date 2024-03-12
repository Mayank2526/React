import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './datalist.css';

function DataList({ data }) {
  return (
    <div className="data-box">
      {data.length > 0 ? (
        data.map(item => (
          <div key={item.id} className="data-item">
            <Link to={`/post/${item.id}`}>
              <img src={`https://via.placeholder.com/150?text=${item.name}`} alt={item.name} />
            </Link>
            <p><strong>Id:</strong> {item.id}</p>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Body:</strong> {item.body}</p>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default DataList;