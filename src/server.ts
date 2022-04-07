import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './app';
import listEndpoints from "express-list-endpoints";

createConnection()
  .then(() => {
    const PORT = process.env.PORT ?? 3000;
  
    console.table(
      listEndpoints(app).map(({ methods, path }) => {
        return { methods, path };
      })
    );

    app.listen(PORT, () => console.log(`App is running on http//localhost:${PORT}`));
  })
  .catch((err) => console.log(err));