export function auth(req, res, next) {
    if (req.query.admin == "true") {
        next();
    } else {
        console.log("You are not authenticated");
        res.send("Unauthorized");
    }
}