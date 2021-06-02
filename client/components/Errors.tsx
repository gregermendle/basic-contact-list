import * as React from 'react';
import styled from 'styled-components';

const ErrorList = styled.ul`
  color: red;
  padding-left: 48px;
  margin: 0;
  margin-bottom: 30px;
`;

const ErrorListItem = styled.li`
  padding: 0;
  margin: 0;
`;

interface IProps {
  formInputErrors: {
    name: string;
    email: string;
    address: string;
  };
}

const Errors = ({ formInputErrors }) => {
  return (
    <ErrorList>
      {Object.values<string>(formInputErrors)
        .filter((x) => x.length > 0)
        .map((x) => (
          <ErrorListItem key={x}>{x}</ErrorListItem>
        ))}
    </ErrorList>
  );
};

export default Errors;
