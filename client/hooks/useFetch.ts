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
    };

const useFetch = <T>(url: string, options?: RequestInit) => {
  const [response, setResponse] = React.useState<Response<T>>({
    type: 'success',
    data: null,
  });

  React.useEffect(() => {
    const subscription = Rx.from(fetch(url, options))
      .pipe(
        tap(() => setResponse({ type: 'loading' })),
        mergeMap((x) => x.json()),
        tap((data) => setResponse({ type: 'success', data })),
        catchError((error, observable) => {
          setResponse({ type: 'error', error });
          return observable;
        })
      )
      .subscribe();

    return () => subscription.unsubscribe();
  }, []);

  return response;
};

export default useFetch;
