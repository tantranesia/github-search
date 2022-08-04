import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { devices } from '../utils/utils';
import Logo from '../style/25231.png';

function Repo(props) {
  return (
    <>
      {props.slice.length === 0 ? (
        <p>No data yet</p>
      ) : (
        props.slice?.map((col, idx) => {
          return (
            <Row>
              <Column>
                <img
                  src={col?.owner?.avatar_url || Logo}
                  alt="avatar"
                  style={{ width: '25%', borderRadius: '20px' }}
                />
                <p>{col?.owner?.login || []}</p>
                <p>{col?.owner?.repos_url || []}</p>
                <p>{col.full_name}</p>
                <p>{col.clone_url}</p>
              </Column>
            </Row>
          );
        })
      )}
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

export default Repo;
