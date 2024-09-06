const express = require('express');
const sequelize = require('./models');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const crudRoutes = require('./routes/crud');
require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();

app.use('/auth', authRoutes);
app.use('/api', crudRoutes);

sequelize.sync()
    .then(() => console.log('Banco de dados sincronizado'))
    .catch(err => console.log('Erro ao sincronizar banco de dados:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
