// registerService.js

const axios = require('axios');

const registerService = async () => {
  try {
    const serviceData = {
      name: 'node-auth-service',
      address: 'localhost',
      port: 2000,
      tags: ['node', 'auth']
    };

    const response = await axios.post('http://localhost:9090/register', serviceData);
    console.log(response.data);
  } catch (error) {
    console.error('Error registering service:', error);
  }
};

registerService();
