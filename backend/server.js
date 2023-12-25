const app = require("./app");

const connectDB = require("./config/database.js");
// connenct database
connectDB();
// home route
app.get("/", (req, res) => {
  res.json({ success: true, message: "server is working" });
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server Is Running ${process.env.PORT || 8000}`);
});
