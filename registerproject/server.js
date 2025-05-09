const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { swaggerDocs, swaggerUi } = require('./swagger');

dotenv.config();
connectDB();
 
const app = express();
app.use(cors());
app.use(express.json());
 
// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/auth', require('./routes/auth'));

 
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
console.log(`Visit http://localhost:${PORT}/api-docs for API documentation`);