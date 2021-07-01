import express from "express";
import loaders from "./loaders";

async function startServer() {
    const app = express();
    await loaders(app);

    app.get('/', (req,res) =>
        res.send('Express + TypeScript Server'));

    const PORT = 3000;
    app.listen(PORT, () => console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`));
}

startServer();
