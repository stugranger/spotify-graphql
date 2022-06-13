import express from 'express';

import graphql from './graphql';

const app = express();

app.use('/graphql', graphql);
app.get('*', (request, response) => response.redirect('/graphql'));

export default app;
