import express from "express"
import { body, validationResult } from "express-validator"
let app = express()
import path from "path"
import { fileURLToPath } from "url"
let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "validation.html"));
});

app.post("/submit", [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({ min:4, max:8 }).withMessage('Password must be between 4 to 8 chars')
], (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((err)=>`<li>${err.msg}</li>`).join('');
        return res.send(errorMessages);
    }
    res.send("Form submitted successfully");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});