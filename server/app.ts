import * as express from 'express';
import * as store from './store';
import * as path from 'path';

const app = express();
const port = 3000;
const clientPath = path.join(__dirname, '../client/dist');

app.use(express.static(clientPath));

app.get('/contact-list', async (req, res) => {
  try {
    const contactList = await store.getContactList();
    res.json({ contactList });
  } catch (error) {
    res.json({ error });
  }
});

app.post('/contact', async (req, res) => {
  try {
    const contactList = await store.getContactList();
    res.json({ contactList });
  } catch (error) {
    res.json({ error });
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
