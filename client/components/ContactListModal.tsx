import * as React from 'react';
import styled from 'styled-components';
import useContactList from '../hooks/useContactList';
import List from './List';
import ListItem from './ListItem';
import Modal from './Modal';
import ModalTitle from './ModalTitle';
import ModalActionButton from './ModalActionButton';
import { useHistory } from 'react-router';
import { IContact } from '../../types';
import { Response } from '../hooks/types';

interface IProps {
  contactsResponse: Response<Array<IContact>>;
}

const NoContactsMessage = styled.div`
  font-size: 14px;
  text-align: center;
  padding-top: 10px;
  color: rgba(0, 0, 0, 0.45);
`;

const formatAddress = (contact: IContact) =>
  `${contact.addressLine1}, ${
    contact.addressLine2 ? contact.addressLine2 + ' ,' : ''
  } ${contact.city}, ${contact.state} ${contact.zipCode}`;

const ContactListModal: React.FunctionComponent<IProps> = ({
  contactsResponse,
}) => {
  const history = useHistory();

  const goToAddContactPage = () => {
    history.push('/add');
  };

  if (contactsResponse.type === 'error') {
    return null;
  }

  if (contactsResponse.type === 'loading') {
    return null;
  }

  return (
    <Modal>
      <ModalTitle>Contacts</ModalTitle>
      <List>
        {contactsResponse.data.length === 0 && (
          <NoContactsMessage>You don't have any contacts.</NoContactsMessage>
        )}
        {contactsResponse.data.map((x, i) => (
          <ListItem
            key={i}
            primaryText={x.name}
            secondaryText={x.email}
            tertiaryText={x.addressLine1 ? formatAddress(x) : '—'}
          />
        ))}
      </List>
      <ModalActionButton onClick={goToAddContactPage}>
        Add Contact
      </ModalActionButton>
    </Modal>
  );
};

export default ContactListModal;
