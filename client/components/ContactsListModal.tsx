import * as React from 'react';
import styled from 'styled-components';
import useContactList from '../hooks/useContactList';
import { IAddress } from '../types';
import List from './List';
import ListItem from './ListItem';
import Modal from './Modal';
import ModalTitle from './ModalTitle';

interface IProps {
  contactsResponse: ReturnType<typeof useContactList>;
}

const AddContactButton = styled.button`
  border: 0;
  background-color: #308efe;
  color: #fff;
  padding: 15px 0;
  &:hover,
  &:focus {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.75;
  }
`;

const formatAddress = (address: IAddress) =>
  `${address.addressLine1}, ${address.addressLine2}, ${address.city}, ${address.state} ${address.zipCode}`;

const ContactsListModal: React.FunctionComponent<IProps> = ({
  contactsResponse,
}) => {
  if (contactsResponse.type === 'error') {
    console.log('error');
  }

  if (contactsResponse.type === 'loading') {
    console.log('loading');
  }

  return (
    <Modal>
      <ModalTitle>Contacts</ModalTitle>
      <List>
        {contactsResponse.data.map((x) => (
          <ListItem
            key={x.email}
            primaryText={x.name}
            secondaryText={x.email}
            tertiaryText={formatAddress(x.address)}
          />
        ))}
      </List>
      <AddContactButton>Add Contact</AddContactButton>
    </Modal>
  );
};

export default ContactsListModal;
