export interface IContact {
  name: string;
  email: string;
  address: {
    city: string;
    state: string;
    country: string;
    zipCode: string;
    addressLine1: string;
    addressLine2: string;
  };
}
