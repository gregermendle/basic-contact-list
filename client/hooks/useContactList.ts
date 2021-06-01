import * as React from 'react';
import useFetch from './useFetch';
import { IContact } from '../../types';

const useContactList = () => {
  const response = useFetch<{ contactList: Array<IContact> }>(
    'http://localhost:3000/contact-list'
  );

  console.log(response);

  if (response.type === 'success') {
    return {
      type: 'success',
      data: response.data?.contactList ?? [],
    };
  }

  return response;
};

export default useContactList;
