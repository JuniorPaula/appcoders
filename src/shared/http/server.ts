import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server is running on port ${port} 🤠`);
});
