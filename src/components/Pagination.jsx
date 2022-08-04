import React, { useState, useEffect } from 'react';

function Pagination({ setCurrentPage, rowsPerPage, user }) {
  const [page, setPage] = useState(1);
  const [tableRange, setTableRange] = useState([]);
  const data = user.user;

  // handle pagination number
  const calculateRange = () => {
    const range = [];
    const num = Math.ceil(data.length / rowsPerPage);
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    return range;
  };

  useEffect(() => {
    const range = calculateRange(data, rowsPerPage);
    setTableRange([...range]);
  }, [data, setTableRange, page]);

  return (
    <div style={{gap: '10px', display: 'flex', height: '50px', width: '100px'}}>
      {tableRange.map((col) => {
        return <button onClick={() => setCurrentPage(col)}>{col}</button>;
      })}
    </div>
  );
}

export default Pagination;
