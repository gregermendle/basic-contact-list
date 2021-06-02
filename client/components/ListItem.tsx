import * as React from 'react';
import styled from 'styled-components';

const ListItemContainer = styled.li`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const ListItemPrimary = styled.div`
  color: rgba(0, 0, 0, 0.85);
`;

const ListItemSecondary = styled.div`
  color: rgba(0, 0, 0, 0.45);
`;

const ListItemTertiary = styled.div`
  padding-top: 10px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
`;

const ListItemButton = styled.button`
  padding: 10px 30px;
  border: 0;
  background-color: transparent;
  display: block;
  text-align: left;
  width: 100%;
  &:hover,
  &:focus {
    background-color: #308efe10;
  }
  &:active {
    background-color: #308efe30;
  }
`;

interface IProps {
  primaryText: string;
  secondaryText: string;
  tertiaryText: string;
}

const ListItem: React.FunctionComponent<IProps> = ({
  primaryText,
  secondaryText,
  tertiaryText,
}) => {
  return (
    <ListItemContainer>
      <ListItemButton>
        <ListItemPrimary>{primaryText}</ListItemPrimary>
        <ListItemSecondary>{secondaryText}</ListItemSecondary>
        <ListItemTertiary>{tertiaryText}</ListItemTertiary>
      </ListItemButton>
    </ListItemContainer>
  );
};

export default ListItem;
