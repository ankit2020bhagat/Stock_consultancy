import express from "express";
import connectDB from "./config/db.js";
import userRouter from "./router/user.js";
const app = express();
const PORT = process.env.PORt || 8080;
connectDB();
app.use(express.json());
app.use("/user", userRouter);
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server listening on port ", +PORT);
  }
});
