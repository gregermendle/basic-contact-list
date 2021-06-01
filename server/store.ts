import * as fs from 'fs/promises';
import * as path from 'path';
import { IContact } from '../types';

const contactListPath = path.join(__dirname, './contactList.json');

export const getContactList = async (): Promise<Array<IContact>> => {
  const contactListData = await fs.readFile(contactListPath, 'utf8');
  return JSON.parse(contactListData);
};

export const addContact = async (contact: IContact) => {
  const contactList = await getContactList();
  const newContactList = [...contactList, contact];
  await fs.writeFile(contactListPath, JSON.stringify(newContactList));
  return contactList;
};
