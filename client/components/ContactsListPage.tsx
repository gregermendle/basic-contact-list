import * as React from 'react';
import Page from './Page';
import ContactsListModal from './ContactsListModal';
import useContactList from '../hooks/useContactList';

const ContactListPage = () => {
  const contactsResponse = useContactList();

  return (
    <Page>
      <ContactsListModal contactsResponse={contactsResponse} />
    </Page>
  );
};

export default ContactListPage;
