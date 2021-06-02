import * as React from 'react';
import Page from './Page';
import ContactListModal from './ContactListModal';
import AddContactModal from './AddContactModal';
import useContactList from '../hooks/useContactList';
import { Switch, Route, useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const [contactsResponse, refetch] = useContactList();

  React.useEffect(() => {
    refetch();
  }, [location]);

  return (
    <Page>
      <Switch>
        <Route path="/add">
          <AddContactModal />
        </Route>
        <Route path="/">
          <ContactListModal contactsResponse={contactsResponse} />
        </Route>
      </Switch>
    </Page>
  );
};

export default HomePage;
