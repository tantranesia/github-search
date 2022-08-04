import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Context } from '../pages/Home';
import axios from '../utils/axios';
import { handleUser } from '../redux/action/user';
import { devices } from '../utils/utils';

// import components
import Pagination from './Pagination';
import User from './User';
import Repo from './Repo';

function Cards() {
  const user = useSelector((state) => state.user);
  console.log(user, 'cek res');
  const { search, values } = useContext(Context);
  const dispatch = useDispatch();
  const data = user.user;
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // handle pagination
  const [slice, setSlice] = useState([]);
  const sliceData = (data, currentPage, rowsPerPage) => {
    return data.slice(
      (currentPage - 1) * rowsPerPage,
      currentPage * rowsPerPage
    );
  };
  // handle api call
  const getUsers = () => (dispatch) => {
    axios
      .get(`/search/${values}?q=${search}`)
      .then((res) => dispatch(handleUser(res.data.items)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const slice = sliceData(data, currentPage, rowsPerPage);
    setSlice(() => [...slice]);
    console.log(slice, 'cek slice brooo');
    dispatch(getUsers());
  }, [search]);

  return (
    <>
     <Wrapper>
      {user.user === undefined ? (
        <p>No data</p>
      ) : values === 'users' ? (
        <User slice={slice} />
      ) : (
        <Repo slice={slice} />
      )}

    
    </Wrapper>
      <Pagination
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      rowsPerPage={rowsPerPage}
      user={user}
      style={{margin: 'auto', display: 'flex', justifyItems: 'center', itemsAlign: 'center' }}
    />
    
    </>
   
  );
}

const Wrapper = styled.div`
  @media ${devices.mobileM} {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  @media ${devices.tablet} {
    flex-direction: row;
    gap: 10px;
    width: 100%;
  }
  @media ${devices.laptop} {
    flex-direction: row;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media ${devices.laptopL} {
    flex-direction: row;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export default Cards;
