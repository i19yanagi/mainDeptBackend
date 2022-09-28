import { Application } from 'oak/mod.ts';
import router from './routes/route.ts';
import { oakCors } from 'cors';

const app = new Application();

app.use(oakCors())
  .use(router.routes());
await app.listen({ port: 8000 });
