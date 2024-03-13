import React, { useState } from 'react';
import DataList from './DataList';

function Search({ data }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.id.toString().includes(searchTerm) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Search_Post..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ margin: '0 auto', backgroundColor:'white',color:'black'}}
      />
      <DataList data={filteredData} />
    </div>
  );
}

export default Search;
