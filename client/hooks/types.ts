export type Response<T> =
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
      data?: any | null;
    };
