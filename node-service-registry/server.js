// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 9090;

// In-memory store for registered services
const services = {};

app.use(bodyParser.json());

// Start the server
app.listen(port, () => {
  console.log(`Service registry running on http://localhost:${port}`);
});

// Endpoint to register a service
app.post('/register', (req, res) => {
  const { name, address, port, tags } = req.body;
  if (!name || !address || !port) {
    return res.status(400).send('Missing required fields');
  }

  services[name] = {
    address,
    port,
    tags: tags || [],
    timestamp: Date.now()
  };

  console.log(`Service registered: ${name}`);
  res.status(200).send(`Service registered: ${name}`);
});

// Endpoint to list all registered services
app.get('/services', (req, res) => {
  res.status(200).json(services);
});

// Endpoint to discover a specific service by name
app.get('/services/:name', (req, res) => {
  const service = services[req.params.name];
  if (!service) {
    return res.status(404).send('Service not found');
  }
  res.status(200).json(service);
});

// Simulated health check routine
const checkHealth = () => {
  const now = Date.now();
  for (const [name, service] of Object.entries(services)) {
    // Remove services that haven't checked in for a certain period
    if (now - service.timestamp > 60000) { // e.g., 1 minute
      delete services[name];
      console.log(`Service removed due to failed health check: ${name}`);
    }
  }
};

// Run health checks periodically
setInterval(checkHealth, 30000); // Check every 30 seconds
