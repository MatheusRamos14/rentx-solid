import express from 'express';

import { categoriesRouter } from './modules/category/routes/category.route';

const app = express();
app.use(express.json())

app.use('/categories', categoriesRouter)
app.use('/specifications', categoriesRouter)

export { app };