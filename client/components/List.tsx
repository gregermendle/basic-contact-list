import * as React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  li:last-child {
    border-bottom: 0;
  }
`;

export default List;
