import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(cors({
  origin: "https://zod-prisma-auth.netlify.app",
  credentials: true
}));


//app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use(errorMiddleware);

app.get("/", (req, res) => {
    res.send("Hello from backend");
  });
  

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
  });
  

export default app;
