import * as React from 'react';

type Response<T> =
  | {
      type: 'loading';
    }
  | {
      type: 'success';
      data: T | null;
    }
  | {
      type: 'error';
      data?: T | null;
      error: Error;
    };

const useFetch = <T>(url: string, options?: RequestInit) => {
  const [fetchResponse, setResponse] = React.useState<Response<T>>({
    type: 'success',
    data: null,
  });

  React.useEffect(() => {
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

    doFetch();
  }, []);

  return fetchResponse;
};

export default useFetch;
