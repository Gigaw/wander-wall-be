import express from "express";
import tourRouter from "./routes/tour.routes.js";
import authRouter from "./routes/auth.routes.js";
import bookingRouter from "./routes/booking.routes.js";

const port = 3000;
const app = express();

app.use(express.json());
// app.use(express.bodyParser());

app.use("/api", tourRouter);
app.use("/api", authRouter);
app.use("/api", bookingRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
