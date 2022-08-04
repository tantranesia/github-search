import React from 'react';
import styled, { css } from 'styled-components';
import { devices } from '../utils/utils';
import Logo from '../style/25231.png';


function User(props) {
  return (
    <>
      {props.slice.map((col, idx) => {
        return (
          <Row>
            <Column>
              <img
                src={col.avatar_url || Logo }
                alt="avatar"
                style={{ width: '25%', borderRadius: '20px' }}
              />
              <p>{col.login}</p>
              <p>{col.html_url}</p>
              <p>{col.bio}</p>
              <p></p>
            </Column>
          </Row>
        );
      })}
    </>
  );
}
const Row = styled.div`
  
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 30%;
    
`;
const Column = styled.div`
  margin: 16px;
  gap: 10px;
  background-color: #3699db;
  padding: 10px;
  border-radius: 10px;
`;

export default User;
