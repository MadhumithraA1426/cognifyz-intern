const express = require("express");
const app = express();
const PORT = 3000;

let users = [];

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { error: null, success: null });
});

app.post("/submit", (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.render("index", {
      error: "All fields are required",
      success: null
    });
  }

  if (age < 18) {
    return res.render("index", {
      error: "Age must be 18 or above",
      success: null
    });
  }

  users.push({ name, email, age });

  res.render("index", {
    error: null,
    success: "Form submitted successfully!"
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
