import * as React from 'react';
import useContactList from '../hooks/useContactList';
import List from './List';
import ListItem from './ListItem';
import Modal from './Modal';
import ModalTitle from './ModalTitle';

interface IProps {
  contactsResponse: ReturnType<typeof useContactList>;
}

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
          />
        ))}
      </List>
    </Modal>
  );
};

export default ContactsListModal;
