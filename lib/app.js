const express = require('express');
const app = express();

const setupSwagger = require('../doc/swagger');

const customerRoutes = require('../routes/customersRoutes');

app.use(express.json());

app.use('/api/customers', customerRoutes);
setupSwagger(app);

exports.app = app;