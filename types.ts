export interface IContact {
  name: string;
  email: string;
  address: IAddress;
}

export interface IAddress {
  city: string;
  state: string;
  country: string;
  zipCode: string;
  addressLine1: string;
  addressLine2: string;
}
