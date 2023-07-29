const mongoose = require("mongoose");
const app = require("./app");
const logger = require("./config/logger");

let server;
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info("Connected to MongoDB");
    server = app.listen(process.env.PORT || 3000, () => {
      logger.info(`Listening to port ${process.env.PORT || 3000}`);
    });
  });

process.on("SIGTERM", () => {
  logger.info("SIGTERM received");
  if (server) {
    server.close();
  }
});
