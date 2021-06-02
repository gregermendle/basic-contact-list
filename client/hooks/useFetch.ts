import * as React from 'react';
import { Response } from './types';

const useFetch = <T>(url: string, options?: RequestInit) => {
  const [fetchResponse, setResponse] = React.useState<Response<T>>({
    type: 'success',
    data: null,
  });

  const doFetch = async () => {
    try {
      setResponse({ type: 'loading' });
      const response = await fetch(url, options);
      const data = await response.json();
      setResponse({ type: 'success', data });
      if (data.formInputErrors || data.error) {
        setResponse({ type: 'error', data, error: new Error() });
      }
    } catch (error) {
      setResponse({ type: 'error', error });
    }
  };

  React.useEffect(() => {
    doFetch();
  }, []);

  return [fetchResponse, doFetch] as const;
};

export default useFetch;
