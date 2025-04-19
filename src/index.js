import app from "./app.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({
    path: "./.env",
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
