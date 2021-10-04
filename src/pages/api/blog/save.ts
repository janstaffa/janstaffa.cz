import fs from 'fs';
import { NextApiHandler } from 'next';
import path from 'path';
import shortid from 'shortid';
import { BlogData } from '../../..';

const handler: NextApiHandler = (req, res) => {
  if (req.method === 'POST') {
    const { meta, content } = req.body as BlogData;
    if (!meta || !content) {
      res.status(400).json({ error: 'Invalid input.' });
      return;
    }
    const blogs = fs.readdirSync(path.join('posts'));
    let id;
    do {
      id = shortid.generate();
    } while (blogs.includes(id + '.html'));

    const shortName = meta.title.replace(/\s+/g, '-').toLowerCase();

    const contentWithMeta = `---\nid: ${id}\nurlName: ${shortName}\ntitle: ${
      meta.title
    }\ndate: ${new Date().toDateString()}\n---\n${content}`;
    fs.writeFile(
      path.join('posts', shortName + '.html'),
      contentWithMeta,
      (err) => {
        if (err) {
          res.status(400).json({ error: 'Invalid input.' });
          return;
        }
      }
    );
  }
  res.status(200).json({ name: 'John Doe' });
};

export default handler;
