const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const usersRoutes = require("./routes/users-routes");
const blogsRoutes = require("./routes/blogs-routes"); // Import blogs routes
app.use("/api/users", usersRoutes);
app.use("/api/blogs", blogsRoutes); // Use blogs routes for /api/blogs path

// Error handling middleware
app.use((error, req, res, next) => {
  if (res.header.sent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message } || "An unknown has occurred");
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});

///This is the starting point
//Updating the code in Git process
