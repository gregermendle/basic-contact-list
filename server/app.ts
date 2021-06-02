import * as express from 'express';
import * as store from './store';
import * as path from 'path';
import * as cors from 'cors';
import { json } from 'body-parser';
import { validateFormInput } from './validationUtils';

const app = express();
const port = 3000;
const clientPath = path.join(__dirname, '../client/dist');

app.use(express.static(clientPath));
app.use(cors());
app.use(json());

app.get('/contact-list', async (req, res) => {
  try {
    const contactList = await store.getContactList();
    res.json({ contactList });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.post('/contact', async (req, res) => {
  const formInputErrors = validateFormInput(req.body);

  if (Object.values(formInputErrors).some((x) => x.length > 0)) {
    return res.status(400).json({ formInputErrors });
  }

  try {
    await store.addContact(req.body);
    const contactList = await store.getContactList();
    res.json({ contactList });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
