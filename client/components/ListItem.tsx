import * as React from 'react';
import styled from 'styled-components';

const ListItemContainer = styled.li`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const ListItemPrimary = styled.div`
  color: rgba(0, 0, 0, 0.65);
`;

const ListItemSecondary = styled.div``;

const ListItemButton = styled.button`
  padding: 10px 30px;
  border: 0;
  background-color: transparent;
  display: block;
  text-align: left;
  width: 100%;
`;

interface IProps {
  primaryText: string;
  secondaryText: string;
}

const ListItem: React.FunctionComponent<IProps> = ({
  primaryText,
  secondaryText,
}) => {
  return (
    <ListItemContainer>
      <ListItemButton onClick={() => console.log('here')}>
        <ListItemPrimary>{primaryText}</ListItemPrimary>
        <ListItemSecondary>{secondaryText}</ListItemSecondary>
      </ListItemButton>
    </ListItemContainer>
  );
};

export default ListItem;
