import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Cards from '../components/Cards';
import { devices } from '../utils/utils';
import { createContext } from 'react';
// import assets
import Logo from '../style/25231.png';

export const Context = createContext(null);

function Home() {
  const [search, setSearch] = useState('');
  const [values, setValues] = useState('users');

  return (
    <div>
      <Context.Provider
        value={{
          search,
        //   updateSearch: (search) => setSearch(search),
          values,
        //   updateValues: (values) => setValues(values),
        }}
      >
        <Wrapper>
          <div style={{ display: 'flex' }}>
            <MyIcon />
            <div>
              <Title>GITHUB Searcher</Title>
              <Title>Search users or repositories below</Title>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <Input
              placeholder="search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Select onChange={(e) => setValues(e.target.value)}>
              <option value="users">User</option>
              <option value="repositories">Repository</option>
            </Select>
          </div>
          <Cards />
        </Wrapper>
      </Context.Provider>
    </div>
  );
}

// Custom CSS
const Input = styled.input`
  border-radius: 6px;
  height: 35px;
  margin: 15px;
  padding: 5px;
  width: 50%;
`;
const Select = styled.select`
  margin: 15px;
  padding: 5px;
  border-radius: 6px;
`;
const MyIcon = styled.img`
  width: 5%;
  margin-right: 20px;
  @media ${devices.mobileM} {
    width: 20%;
  }
`;
const Title = styled.p`
  font-size: 1vw;
  text-align: left;
  @media ${devices.mobileM} {
    font-size: 3vw;
  }
`;
const Wrapper = styled.div`
  flex-direction: column;
  margin: 16px;
`;
MyIcon.defaultProps = {
  src: Logo,
};

export default Home;
