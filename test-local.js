require("dotenv").config();
const { handler } = require("./index");

(async () => {
  try {
    await handler({}, {});
    console.log("Backup completed.");
  } catch (err) {
    console.error("Backup failed:", err);
  }
})();
