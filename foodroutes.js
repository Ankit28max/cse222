import express from "express"

let router = express.Router();

router.get("/food", (req, res) => {
    res.send("All food items");
});

router.get('/order', (req, res) => {
    res.send("Order food items");
})

export default router;