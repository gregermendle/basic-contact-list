import useFetch from './useFetch';
import { IContact } from '../../types';
import { Response } from './types';

const useContactList = (): [Response<Array<IContact>>, () => Promise<void>] => {
  const [response, refetch] = useFetch<{ contactList: Array<IContact> }>(
    'http://localhost:3000/contact-list'
  );

  if (response.type === 'success') {
    return [
      {
        type: 'success',
        data: response.data?.contactList ?? [],
      },
      refetch,
    ];
  }

  return [response, refetch];
};

export default useContactList;
