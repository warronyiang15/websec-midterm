import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import rootRouter from "./routes";
import { prisma } from "./adapters";

const __dirname = dirname(fileURLToPath(import.meta.url));
const frontendDir = path.join(__dirname, "../../frontend/dist");


const port = process.env.PORT || 8000;

const app = express();
//app.use(express.static(frontendDir));
app.use(rootRouter);
app.use(express.static(frontendDir));


app.get("*", (req, res) => { // Keep as the last route
    if (!req.originalUrl.startsWith("/api")) {
        return res.sendFile(path.join(frontendDir, "index.html"));
    }
    return res.status(404).sendFile(path.join(frontendDir, "assets/404.jpeg"));
});

app.listen(port, () => {
    console.log('hi');
});

process.on("exit", async () => {
    await prisma.$disconnect();
});
