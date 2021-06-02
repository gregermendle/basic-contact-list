import { IContact } from '../types';

export const addressIsValid = (contact: IContact) => {
  const { name, email, ...address } = contact;
  const addressValues = Object.entries(address);

  return (
    addressValues
      .filter(([key]) => key !== 'addressLine2')
      .every(([_, x]) => x.length > 0) ||
    addressValues.every(([_, x]) => x.length === 0)
  );
};

export const validateFormInput = (contact: IContact) => {
  const errors = { name: '', email: '', address: '' };

  if (contact.name.length === 0) {
    errors.name = 'Name is required';
  }

  if (contact.email.length === 0) {
    errors.email = 'Email is required';
  }

  if (!addressIsValid(contact)) {
    errors.address = 'Please fillout a complete address.';
  }

  return errors;
};
