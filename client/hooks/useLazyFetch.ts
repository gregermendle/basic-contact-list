import * as React from 'react';
import * as Rx from 'rxjs';
import { catchError, mergeMap, tap } from 'rxjs/operators';

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
      error: Error;
      data?: T | null;
    };

const useLazyFetch = <T>() => {
  const [fetchResponse, setResponse] = React.useState<Response<T>>({
    type: 'success',
    data: null,
  });

  const doFetch = async (url: string, options?: RequestInit) => {
    let responseObj: Response<T>;
    try {
      setResponse({ type: 'loading' });
      const response = await fetch(url, options);
      const data = await response.json();
      responseObj = { type: 'success', data };
      if (data.formInputErrors || data.error) {
        responseObj = { type: 'error', data, error: new Error() };
      }
    } catch (error) {
      responseObj = { type: 'error', error };
    }

    setResponse(responseObj);
    return responseObj;
  };

  return [doFetch, fetchResponse] as const;
};

export default useLazyFetch;
