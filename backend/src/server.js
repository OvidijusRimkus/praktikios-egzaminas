require("dotenv").config();

const app = require("./app");
const testConnection = require("./db/testConnection");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await testConnection();

  app.listen(PORT, () => {
    console.log(`Serveris paleistas ant porto ${PORT}`);
  });
};

startServer();