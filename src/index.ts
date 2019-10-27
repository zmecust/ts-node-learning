import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';

const app: Express = express();

const port: any = process.env.PORT || 3000;

app.get('/', (_req: Request, res: Response) => {
  res.send('hello world');
});

app.listen(port, async () => {
  await mongoose.connect('mongodb://test:test12345678@ds139768.mlab.com:39768/tsexpress', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  console.log(`Running on http://localhost:${port}`);
});
