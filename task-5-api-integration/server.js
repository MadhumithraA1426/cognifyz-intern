const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

// Temporary data storage
let users = [];
let idCounter = 1;

/* CREATE */
app.post("/api/users", (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: "Name is required" });
    }

    const newUser = { id: idCounter++, name };
    users.push(newUser);
    res.status(201).json(newUser);
});

/* READ */
app.get("/api/users", (req, res) => {
    res.json(users);
});

/* DELETE */
app.delete("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id);
    res.json({ message: "User deleted" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
